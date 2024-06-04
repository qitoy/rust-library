use qitoy_dfa::Dfa;

/// `n`以下の非負整数を受理する（下の位から見る）
pub struct LeqInv<'a> {
    n: &'a [u8],
}

impl<'a> LeqInv<'a> {
    /// `n`を任意の進法で表記した配列から作成する
    pub fn new(n: &'a [u8]) -> Self {
        Self { n }
    }
}

impl Dfa for LeqInv<'_> {
    /// (index, greater)
    type State = (usize, bool);
    type Alphabet = u8;

    #[inline]
    fn trans(&self, state: &Self::State, alpha: &Self::Alphabet) -> Option<Self::State> {
        use std::cmp::Ordering::*;
        state.0.checked_sub(1).map(|idx| {
            let d = self.n[idx];
            let greater = match alpha.cmp(&d) {
                Less => false,
                Equal => state.1,
                Greater => true,
            };
            (idx, greater)
        })
    }

    #[inline]
    fn init(&self) -> Self::State {
        (self.n.len(), false)
    }

    #[inline]
    fn accept(&self, state: &Self::State) -> bool {
        state.0 == 0 && !state.1
    }
}

#[cfg(test)]
mod test {
    use super::LeqInv;
    use ac_library::Additive;
    use qitoy_dfa::Dfa;

    #[test]
    fn test() {
        let n = 1_000_000_007;
        let s: Vec<_> = n.to_string().bytes().map(|b| b - b'0').collect();
        let ans = LeqInv::new(&s).calc::<Additive<u64>>(0..10, s.len(), 1, |v, _| *v);
        assert_eq!(ans, n + 1);
    }

    #[test]
    fn test_bi() {
        let n = 998244353;
        let s: Vec<_> = format!("{n:b}").bytes().map(|b| b - b'0').collect();
        let ans = LeqInv::new(&s).calc::<Additive<u32>>(0..2, s.len(), 1, |v, _| *v);
        assert_eq!(ans, n + 1);
    }
}
