use std::cmp::Ordering::{Equal, Greater, Less};
use std::fmt::Debug;
use std::ops::Range;
use std::rc::Rc;

pub trait MAct {
    /// element type
    type S: Clone;
    /// map type
    type F: Clone + PartialEq;
    /// identity element
    fn e() -> Self::S;
    /// binary operation
    fn op(a: &Self::S, b: &Self::S) -> Self::S;
    /// identity map
    fn id() -> Self::F;
    /// composition
    /// `|x| f(g(x))`
    fn comp(f: &Self::F, g: &Self::F) -> Self::F;
    /// mapping
    /// `f(x)`
    /// * `len` - subtree's len (where subtree's value is x)
    fn map(f: &Self::F, x: &Self::S, len: usize) -> Self::S;
}

#[derive(Clone, Copy, PartialEq, Eq)]
enum Color {
    Red,
    Black,
}

struct Node<M: MAct> {
    left: Option<Rc<Node<M>>>,
    right: Option<Rc<Node<M>>>,
    color: Color,
    /// 葉までの黒ノードの数（自身は含まない）
    rank: usize,
    /// 部分木の葉ノード数
    len: usize,
    val: M::S,
    lazy: M::F,
    rev: bool,
}

use Color::{Black, Red};

impl<M: MAct> Clone for Node<M> {
    fn clone(&self) -> Self {
        let Self {
            left,
            right,
            color,
            rank,
            len,
            val,
            lazy,
            rev,
        } = self;
        Self {
            left: left.clone(),
            right: right.clone(),
            color: *color,
            rank: *rank,
            len: *len,
            val: val.clone(),
            lazy: lazy.clone(),
            rev: *rev,
        }
    }
}

impl<M: MAct> Default for Node<M> {
    fn default() -> Self {
        Self {
            val: M::e(),
            lazy: M::id(),
            len: 1,
            left: None,
            right: None,
            color: Black,
            rank: 0,
            rev: false,
        }
    }
}

impl<M: MAct> Node<M> {
    fn new(left: Rc<Self>, right: Rc<Self>, color: Color) -> Rc<Self> {
        Self {
            left: Some(left.clone()),
            right: Some(right.clone()),
            color,
            rank: left.rank
                + match left.color {
                    Black => 1,
                    Red => 0,
                },
            len: left.len + right.len,
            val: M::op(&left.val, &right.val),
            lazy: M::id(),
            rev: false,
        }
        .into()
    }

    fn leaf(val: M::S) -> Rc<Self> {
        Self {
            val,
            ..Default::default()
        }
        .into()
    }

    #[inline]
    fn is_leaf(&self) -> bool {
        self.left.is_none()
    }

    #[inline]
    fn left(&self) -> Rc<Self> {
        self.left.clone().unwrap()
    }

    #[inline]
    fn right(&self) -> Rc<Self> {
        self.right.clone().unwrap()
    }

    fn push_new(mut self: Rc<Self>) -> Rc<Self> {
        if !self.is_leaf() && (self.lazy != M::id() || self.rev) {
            let (left, right) = self.lazy_push().unwrap();
            let this = Rc::make_mut(&mut self);
            this.left = Some(left);
            this.right = Some(right);
            this.lazy = M::id();
            this.rev = false;
        }
        self
    }

    fn lazy_push(&self) -> Option<(Rc<Self>, Rc<Self>)> {
        let Self { left: Some(left), right:Some(right), lazy, rev, .. } = self
            else { return None; };
        (
            left.clone().update(lazy, *rev),
            right.clone().update(lazy, *rev),
        )
            .into()
    }

    fn update(mut self: Rc<Self>, lazy: &M::F, rev: bool) -> Rc<Self> {
        if !self.is_leaf() && rev || lazy != &M::id() {
            let Self {
                left,
                right,
                len,
                val: v,
                lazy: l,
                rev: r,
                ..
            } = Rc::make_mut(&mut self);
            *v = M::map(lazy, v, *len);
            *l = M::comp(lazy, l);
            if rev {
                *r ^= true;
                std::mem::swap(left, right);
            }
        }
        self
    }

    #[inline]
    fn to_black(mut self: Rc<Self>) -> Rc<Self> {
        Rc::make_mut(&mut self).color = Black;
        self
    }

    #[inline]
    fn merge(self: Rc<Self>, v: Rc<Self>) -> Rc<Self> {
        let (left, right, _) = Self::merge_sub(self, v);
        Self::new(left, right, Black)
    }

    fn merge_sub(a: Rc<Self>, b: Rc<Self>) -> (Rc<Self>, Rc<Self>, Color) {
        let (a, b) = (a.push_new(), b.push_new());
        match Ord::cmp(&a.rank, &b.rank) {
            Less => {
                let (left, right, color) = Self::merge_sub(a, b.left());
                if b.color == Black && color == Red && left.color == Red {
                    if b.right().color == Black {
                        (left, Self::new(right, b.right(), Red), Black)
                    } else {
                        (Self::new(left, right, Black), b.right().to_black(), Red)
                    }
                } else {
                    (Self::new(left, right, color), b.right(), b.color)
                }
            }
            Greater => {
                let (left, right, color) = Self::merge_sub(a.right(), b);
                if a.color == Black && color == Red && right.color == Red {
                    if a.left().color == Black {
                        (Self::new(a.left(), left, Red), right, Black)
                    } else {
                        (a.left().to_black(), Self::new(left, right, Black), Red)
                    }
                } else {
                    (a.left(), Self::new(left, right, color), a.color)
                }
            }
            Equal => (a, b, Red),
        }
    }

    fn split(self: Rc<Self>, k: usize) -> (Rc<Self>, Rc<Self>) {
        let (left, right) = self.lazy_push().unwrap();
        let len = left.len;
        match k.cmp(&len) {
            Less => {
                let (l, r) = left.split(k);
                (l, r.merge(right.to_black()))
            }
            Greater => {
                let (l, r) = right.split(k - len);
                (left.to_black().merge(l), r)
            }
            Equal => (left.to_black(), right.to_black()),
        }
    }

    /// 0 < l < r < n
    fn split3(self: Rc<Self>, kl: usize, kr: usize) -> (Rc<Self>, Rc<Self>, Rc<Self>) {
        let (left, right) = self.lazy_push().unwrap();
        let len = left.len;
        match (kl.cmp(&len), kr.cmp(&len)) {
            (_, Less) => {
                let (l, m, r) = left.split3(kl, kr);
                (l, m, r.merge(right.to_black()))
            }
            (_, Equal) => {
                let (l, m) = left.split(kl);
                (l, m, right.to_black())
            }
            (Less, Greater) => {
                let (l, ml) = left.split(kl);
                let (mr, r) = right.split(kr - len);
                (l, ml.merge(mr), r)
            }
            (Equal, _) => {
                let (m, r) = right.split(kr - len);
                (left.to_black(), m, r)
            }
            (Greater, _) => {
                let (l, m, r) = right.split3(kl - len, kr - len);
                (left.to_black().merge(l), m, r)
            }
        }
    }

    fn set(self: Rc<Self>, p: usize, val: M::S) -> Rc<Self> {
        match self.lazy_push() {
            None => Self::leaf(val),
            Some((left, right)) => {
                let len = left.len;
                let (left, right) = if p < len {
                    (left.set(p, val), right)
                } else {
                    (left, right.set(p - len, val))
                };
                Self::new(left, right, self.color)
            }
        }
    }

    fn prod(self: Rc<Self>, l: usize, r: usize, lazy: &M::F, rev: bool) -> M::S {
        if l == r {
            return M::e();
        }
        if l == 0 && r == self.len {
            return M::map(lazy, &self.val, self.len);
        }
        let Self { left: Some(left), right: Some(right), lazy: la, rev: re, .. } = self.as_ref() else {
            unreachable!();
        };
        let (left, right) = if rev { (right, left) } else { (left, right) };
        let (lazy, rev) = (&M::comp(lazy, la), rev ^ re);
        let len = &left.len;
        match (l.cmp(len), r.cmp(len)) {
            (_, Less | Equal) => left.clone().prod(l, r, lazy, rev),
            (Less, Greater) => M::op(
                &left.clone().prod(l, *len, lazy, rev),
                &right.clone().prod(0, r - len, lazy, rev),
            ),
            (Equal | Greater, _) => right.clone().prod(l - len, r - len, lazy, rev),
        }
    }

    fn apply(self: Rc<Self>, l: usize, r: usize, lazy: &M::F) -> Rc<Self> {
        if l == r {
            return self;
        }
        if l == 0 && r == self.len {
            return self.update(lazy, false);
        }
        let (left, right) = self.lazy_push().unwrap();
        let len = left.len;
        let (left, right) = match (l.cmp(&len), r.cmp(&len)) {
            (_, Less | Equal) => (left.apply(l, r, lazy), right),
            (Less, Greater) => (left.apply(l, len, lazy), right.apply(0, r - len, lazy)),
            (Equal | Greater, _) => (left, right.apply(l - len, r - len, lazy)),
        };
        Self::new(left, right, self.color)
    }

    fn dump(self: Rc<Self>, dump: &mut Vec<M::S>) {
        match self.lazy_push() {
            None => dump.push(self.val.clone()),
            Some((left, right)) => {
                left.dump(dump);
                right.dump(dump);
            }
        }
    }

    fn debug(self: Rc<Self>) -> String
    where
        M::S: Debug,
    {
        let dbg = match self.lazy_push() {
            None => format!("{:?}", self.val),
            Some((left, right)) => {
                format!("{} {}", left.debug(), right.debug())
            }
        };
        match self.color {
            Red => dbg,
            Black => format!("[{}]", dbg),
        }
    }
}

pub struct RedBlackTree<M: MAct> {
    top: Option<Rc<Node<M>>>,
}

impl<M: MAct> Clone for RedBlackTree<M> {
    fn clone(&self) -> Self {
        Self {
            top: self.top.clone(),
        }
    }
}

impl<M: MAct> Default for RedBlackTree<M> {
    fn default() -> Self {
        Self { top: None }
    }
}

impl<M, T> From<T> for RedBlackTree<M>
where
    M: MAct,
    T: Into<Option<Rc<Node<M>>>>,
{
    fn from(value: T) -> Self {
        Self { top: value.into() }
    }
}

impl<M> Debug for RedBlackTree<M>
where
    M: MAct,
    M::S: Debug,
{
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "RedBlackTree {}",
            self.top.clone().map_or("[]".to_string(), |top| top.debug())
        )
    }
}

impl<M: MAct> RedBlackTree<M> {
    pub fn new(val: M::S) -> Self {
        Node::<M>::leaf(val).into()
    }

    pub fn rank(&self) -> Option<usize> {
        self.top.as_ref().map(|top| top.rank)
    }

    pub fn len(&self) -> usize {
        self.top.as_ref().map_or(0, |top| top.len)
    }

    pub fn is_empty(&self) -> bool {
        self.top.is_none()
    }

    pub fn merge(&self, rhs: &Self) -> Self {
        match (&self.top, &rhs.top) {
            (None, b) => b.clone().into(),
            (a, None) => a.clone().into(),
            (Some(a), Some(b)) => a.clone().merge(b.clone()).into(),
        }
    }

    pub fn merge3(&self, m: &Self, r: &Self) -> Self {
        if self.rank() < r.rank() {
            self.merge(m).merge(r)
        } else {
            self.merge(&m.merge(r))
        }
    }

    pub fn split(&self, p: usize) -> (Self, Self) {
        assert!(p <= self.len());
        if p == 0 {
            return (Self::default(), self.clone());
        }
        if p == self.len() {
            return (self.clone(), Self::default());
        }
        let (l, r) = self.top.clone().unwrap().split(p);
        (l.into(), r.into())
    }

    pub fn split3(&self, range: Range<usize>) -> (Self, Self, Self) {
        let (l, r) = (range.start, range.end);
        assert!(r <= self.len());
        if l == 0 {
            let (m, r) = self.split(r);
            return (Self::default(), m, r);
        }
        if r == self.len() {
            let (l, m) = self.split(l);
            return (l, m, Self::default());
        }
        if l == r {
            let (l, r) = self.split(l);
            return (l, Self::default(), r);
        }
        let (l, m, r) = self.top.clone().unwrap().split3(l, r);
        (l.into(), m.into(), r.into())
    }

    pub fn insert(&self, p: usize, val: M::S) -> Self {
        let (l, r) = self.split(p);
        let m = Self::new(val);
        l.merge3(&m, &r)
    }

    pub fn erase(&self, p: usize) -> Self {
        let (l, _, r) = self.split3(p..p + 1);
        l.merge(&r)
    }

    pub fn set(&self, p: usize, val: M::S) -> Self {
        self.top.clone().map(|top| top.set(p, val)).into()
    }

    pub fn prod(&self, range: Range<usize>) -> M::S {
        let (l, r) = (range.start, range.end);
        self.top
            .clone()
            .map_or(M::e(), |top| top.prod(l, r, &M::id(), false))
    }

    pub fn apply(&self, range: Range<usize>, f: M::F) -> Self {
        if f == M::id() {
            return self.clone();
        }
        let (l, r) = (range.start, range.end);
        self.top.clone().map(|top| top.apply(l, r, &f)).into()
    }

    pub fn reverse(&self, range: Range<usize>) -> Self {
        let (l, m, r) = self.split3(range);
        let m = m.top.map(|top| top.update(&M::id(), true)).into();
        l.merge3(&m, &r)
    }

    pub fn dump(&self) -> Vec<M::S> {
        let mut dump = Vec::with_capacity(self.len());
        if let Some(top) = &self.top {
            top.clone().dump(&mut dump);
        }
        dump
    }
}

impl<M: MAct> FromIterator<M::S> for RedBlackTree<M> {
    fn from_iter<T: IntoIterator<Item = M::S>>(iter: T) -> Self {
        let data: Vec<_> = iter.into_iter().collect();
        merge_rec(&data)
    }
}

fn merge_rec<M: MAct>(data: &[M::S]) -> RedBlackTree<M> {
    let n = data.len();
    if n == 1 {
        RedBlackTree::new(data[0].clone())
    } else {
        merge_rec(&data[..n / 2]).merge(&merge_rec(&data[n / 2..]))
    }
}

#[cfg(test)]
mod test {
    use super::{MAct, RedBlackTree};

    struct MinAdd;
    /// min - add
    impl MAct for MinAdd {
        type S = i32;
        type F = i32;
        fn e() -> Self::S {
            i32::MAX
        }
        fn op(a: &Self::S, b: &Self::S) -> Self::S {
            a + b
        }
        fn id() -> Self::F {
            0
        }
        fn map(f: &Self::F, x: &Self::S, _: usize) -> Self::S {
            f + x
        }
        fn comp(f: &Self::F, g: &Self::F) -> Self::F {
            f + g
        }
    }

    #[test]
    fn test1() {
        // 1, 1, 4, 5, 1, 4
        let t1: RedBlackTree<MinAdd> = [1, 1, 4, 5, 1, 4].into_iter().collect();
        assert_eq!(t1.dump(), vec![1, 1, 4, 5, 1, 4]);
        // 1, 3, 6, 7, 1, 4
        let t2 = t1.apply(1..4, 2);
        assert_eq!(t2.dump(), vec![1, 3, 6, 7, 1, 4]);
        // [1, 1], [4, 5, 1], [4]
        let (l, _, r) = t1.split3(2..5);
        // [1, 3, 6], [7, 1, 4]
        let (_, m) = t2.split(3);
        // 1, 1, 7, 1, 4, 4
        let t3 = l.merge3(&m, &r);
        assert_eq!(t3.dump(), vec![1, 1, 7, 1, 4, 4]);
        // 1, 4, 1, 7, 1, 4
        let t4 = t3.reverse(1..5);
        assert_eq!(
            t4.dump(),
            vec![1, 4, 1, 7, 1, 4],
            "{:?}.reverse(1..5) = {:?}",
            t3,
            t4,
        );
    }

    #[test]
    fn rev() {
        let n = 10;
        let t: RedBlackTree<MinAdd> = (0..n).collect();
        let t = t.reverse(0..n as usize);
        assert_eq!(t.dump(), (0..n).rev().collect::<Vec<_>>());
    }

    #[test]
    fn rev2() {
        let n = 5;
        let t1: RedBlackTree<MinAdd> = (0..n).collect();
        let t1 = t1.reverse(0..n as usize);
        let t2: RedBlackTree<MinAdd> = (0..n).map(|i| i + n).collect();
        let t2 = t2.reverse(0..n as usize);
        let t = t2.merge(&t1);
        let t = t.reverse(0..2 * n as usize);
        assert_eq!(t.dump(), (0..2 * n).collect::<Vec<_>>());
    }
}
