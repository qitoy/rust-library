use ac_library_rs::modint::ModIntBase;

/// 組み合わせで頻出の計算をModIntで計算します。
pub struct Combi<T: ModIntBase> {
    fact: Vec<T>,
    factinv: Vec<T>,
}

impl<T: ModIntBase> Combi<T> {
    #[cfg_attr(doc, katexit::katexit)]
    /// `n`までの階乗とその逆元を前計算します。  
    /// 計算量$O(n \log n)$
    pub fn new(n: usize) -> Self {
        let mut fact = vec![T::new(1); n+1];
        for i in 1..=n {
            fact[i] = fact[i-1] * i.into();
        }
        let factinv = fact.iter().map(|v| v.inv()).collect();
        Self {
            fact,
            factinv,
        }
    }

    /// 階乗を返します。  
    /// 計算量$O(1)$
    pub fn fact(&self, n: usize) -> T {
        self.fact[n]
    }

    /// 階乗の逆元を返します。  
    /// 計算量$O(1)$
    pub fn factinv(&self, n: usize) -> T {
        self.factinv[n]
    }

    /// ${}\_{n}P{}\_{k}$を返します。  
    /// 計算量$O(1)$
    pub fn perm(&self, n: usize, k: usize) -> T {
        if n < k { T::raw(0) } else { self.fact[n] * self.factinv[n-k] }
    }

    /// ${}\_{n}C{}\_{k}$を返します。  
    /// 計算量$O(1)$
    pub fn combi(&self, n: usize, k: usize) -> T {
        if n < k { T::raw(0) } else { self.fact[n] * self.factinv[n-k] * self.factinv[k] }
    }
}
