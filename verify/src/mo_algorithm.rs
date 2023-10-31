use super::{verify, Verify};

struct MoAlgorithm;

impl Verify for MoAlgorithm {
    fn solve(input: &str, stdout: &mut String) {
        use ac_library::FenwickTree;
        use itertools::Itertools;
        use qitoy_mo::Mo;
        use qitoy_prelude::LowerBound;
        use std::fmt::Write;

        let input = proconio::source::once::OnceSource::from(input);
        proconio::input! {
            from input,
            n: usize, q: usize,
            a: [i32; n],
            q: [(usize, usize); q],
        }

        let a = {
            let b = a.iter().copied().sorted().dedup().collect_vec();
            a.into_iter().map(|v| b.lower_bound(v)).collect_vec()
        };

        struct A {
            a: Vec<usize>,
            bit: FenwickTree<i64>,
            inv: i64,
        }

        impl Mo for A {
            type T = i64;
            fn push_left(&mut self, l: usize) {
                let a = self.a[l];
                self.inv += self.bit.sum(..a);
                self.bit.add(a, 1);
            }
            fn pop_left(&mut self, l: usize) {
                let a = self.a[l];
                self.inv -= self.bit.sum(..a);
                self.bit.add(a, -1);
            }
            fn push_right(&mut self, r: usize) {
                let a = self.a[r];
                self.inv += self.bit.sum(a + 1..);
                self.bit.add(a, 1);
            }
            fn pop_right(&mut self, r: usize) {
                let a = self.a[r];
                self.inv -= self.bit.sum(a + 1..);
                self.bit.add(a, -1);
            }
            fn assign(&mut self) -> Self::T {
                self.inv
            }
        }

        let a = A {
            bit: FenwickTree::new(a.len(), 0),
            a,
            inv: 0,
        }
        .run(&q);
        writeln!(stdout, "{}", a.iter().join("\n")).unwrap();
    }
}

verify! {
    MoAlgorithm("library_checker/static_range_inversions_query")
}