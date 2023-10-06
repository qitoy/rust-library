use super::{Verify, verify};

struct WeightedDsu;

impl Verify for WeightedDsu {
    fn solve(input: &str, stdout: &mut String) {
        use proconio::input;
        use qitoy_weighted_dsu::WeightedDsu;
        use ac_library::Additive;

        let mut source = proconio::source::once::OnceSource::from(input);
        input! {
            from &mut source,
            n: usize, q: usize,
        }
        let mut wdsu = WeightedDsu::<Additive<i64>>::new(n);
        for _ in 0..q {
            input! {
                from &mut source,
                q: usize,
            }
            if q == 0 {
                input! {
                    from &mut source,
                    x: usize, y: usize, z: i64,
                }
                wdsu.merge(x, y, z);
            } else {
                input! {
                    from &mut source,
                    x: usize, y: usize,
                }
                if let Some(z) = wdsu.diff(x, y) {
                    use std::fmt::Write;
                    writeln!(stdout, "{z}").unwrap();
                } else {
                    stdout.push_str("?\n");
                }
            }
        }
    }
}

verify! {
    WeightedDsu("aoj/DSL_1_B")
}