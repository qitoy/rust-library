// verification-helper: PROBLEM https://judge.yosupo.jp/problem/segment_add_get_min
use proconio::input;
use qitoy_derive::query_readable;
use qitoy_li_chao_tree::LiChaoTree;

query_readable!(Query, [
    { l: i64, r: i64, a: i64, b: i64, },
    { p: i64, },
]);

fn main() {
    input! {
        n: usize, q: usize,
        line: [(i64, i64, i64, i64); n],
        query: [Query; q],
    }

    let mut lct = LiChaoTree::new(-1 << 30..1 << 30);
    for (l, r, a, b) in line {
        lct.add_segment(l..r, a, b);
    }
    for query in query {
        match query {
            Query::Query0 { l, r, a, b } => lct.add_segment(l..r, a, b),
            Query::Query1 { p } => {
                let min = lct.get_min(p);
                if min == i64::MAX {
                    println!("INFINITY");
                } else {
                    println!("{min}");
                }
            }
        }
    }
}
