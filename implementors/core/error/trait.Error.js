(function() {var implementors = {
"amplify":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"amplify/struct.IoError.html\" title=\"struct amplify::IoError\">IoError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"amplify/flags/struct.ParseError.html\" title=\"struct amplify::flags::ParseError\">ParseError</a>"]],
"amplify_num":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"amplify_num/error/struct.OverflowError.html\" title=\"struct amplify_num::error::OverflowError\">OverflowError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"amplify_num/error/enum.DivError.html\" title=\"enum amplify_num::error::DivError\">DivError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"amplify_num/error/enum.PositDecodeError.html\" title=\"enum amplify_num::error::PositDecodeError\">PositDecodeError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"amplify_num/error/struct.ParseLengthError.html\" title=\"struct amplify_num::error::ParseLengthError\">ParseLengthError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"amplify_num/hex/enum.Error.html\" title=\"enum amplify_num::hex::Error\">Error</a>"]],
"amplify_syn":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"amplify_syn/enum.Error.html\" title=\"enum amplify_syn::Error\">Error</a>"]],
"either":[["impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>,</span>"]],
"getrandom":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"getrandom/struct.Error.html\" title=\"struct getrandom::Error\">Error</a>"]],
"itertools":[["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"itertools/structs/struct.ExactlyOneError.html\" title=\"struct itertools::structs::ExactlyOneError\">ExactlyOneError</a>&lt;I&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"]],
"num_bigint":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"num_bigint/struct.ParseBigIntError.html\" title=\"struct num_bigint::ParseBigIntError\">ParseBigIntError</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"num_bigint/struct.TryFromBigIntError.html\" title=\"struct num_bigint::TryFromBigIntError\">TryFromBigIntError</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span>"]],
"num_complex":[["impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"num_complex/struct.ParseComplexError.html\" title=\"struct num_complex::ParseComplexError\">ParseComplexError</a>&lt;E&gt;"]],
"num_rational":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"num_rational/struct.ParseRatioError.html\" title=\"struct num_rational::ParseRatioError\">ParseRatioError</a>"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"proc_macro2/struct.LexError.html\" title=\"struct proc_macro2::LexError\">LexError</a>"]],
"rand":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distributions/enum.BernoulliError.html\" title=\"enum rand::distributions::BernoulliError\">BernoulliError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distributions/weighted/enum.WeightedError.html\" title=\"enum rand::distributions::weighted::WeightedError\">WeightedError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rand/rngs/adapter/struct.ReadError.html\" title=\"struct rand::rngs::adapter::ReadError\">ReadError</a>"]],
"rand_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rand_core/struct.Error.html\" title=\"struct rand_core::Error\">Error</a>"]],
"syn":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"syn/parse/struct.Error.html\" title=\"struct syn::parse::Error\">Error</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()