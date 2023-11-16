var searchIndex = JSON.parse('{\
"qitoy_bit_util":{"doc":"","t":"ILLL","n":["BitUtil","bit_get","bit_set","one"],"q":[[0,"qitoy_bit_util"]],"d":["","","",""],"i":[0,2,2,2],"f":[0,[[],1],[[]],[[]]],"c":[],"p":[[15,"bool"],[8,"BitUtil"]]},\
"qitoy_bit_vec":{"doc":"","t":"DLLLLLLLLLLLLLLLL","n":["BitVec","at","borrow","borrow_mut","fmt","from","from_iter","into","is_empty","len","rank0","rank1","select0","select1","try_from","try_into","type_id"],"q":[[0,"qitoy_bit_vec"]],"d":["コンパクト辞書","","","","","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","","","","","","","","",""],"i":[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"f":[0,[[1,2],3],[[]],[[]],[[1,4],5],[[]],[6,1],[[]],[1,3],[1,2],[[1,2],2],[[1,2],2],[[1,2],[[7,[2]]]],[[1,2],[[7,[2]]]],[[],8],[[],8],[[],9]],"c":[],"p":[[3,"BitVec"],[15,"usize"],[15,"bool"],[3,"Formatter"],[6,"Result"],[8,"IntoIterator"],[4,"Option"],[4,"Result"],[3,"TypeId"]]},\
"qitoy_combi":{"doc":"","t":"DLLLLLLLLLLLL","n":["Combi","borrow","borrow_mut","combi","fact","factinv","from","into","new","perm","try_from","try_into","type_id"],"q":[[0,"qitoy_combi"]],"d":["…","","","$<code>{}_{n}C{}_{k}</code>$を返します。 計算量$<code>O(1)</code>$","階乗を返します。 計算量$<code>O(1)</code>$","階乗の逆元を返します。 計算量$<code>O(1)</code>$","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","<code>n</code>までの階乗とその逆元を前計算します。 …","$<code>{}_{n}P{}_{k}</code>$を返します。 計算量$<code>O(1)</code>$","","",""],"i":[0,2,2,2,2,2,2,2,2,2,2,2,2],"f":[0,[[]],[[]],[[[2,[1]],3,3],1],[[[2,[1]],3],1],[[[2,[1]],3],1],[[]],[[]],[3,[[2,[1]]]],[[[2,[1]],3,3],1],[[],4],[[],4],[[],5]],"c":[],"p":[[8,"ModIntBase"],[3,"Combi"],[15,"usize"],[4,"Result"],[3,"TypeId"]]},\
"qitoy_derive":{"doc":"","t":"O","n":["query_readable"],"q":[[0,"qitoy_derive"]],"d":["query_readable! {}"],"i":[0],"f":[0],"c":[],"p":[]},\
"qitoy_dfa":{"doc":"","t":"DQQQDIIQDDIDQQQDKKLLLLLLLLLLLLLLLLLLLLLLLLLLFLLLLLLLLKKLLLLLLLLLLLLKLLLLLLLLKKLLLLLLLLLLLLLLLLLLLLLLLL","n":["AlphaTrans","Alphabet","Alphabet","Alphabet","And","Dfa","IntoDfa","IntoDfa","Less","MultipleOf","Nfa","NonZero","State","State","State","Unit","accept","accept","accept","accept","accept","accept","accept","accept","alpha_trans","alpha_trans","and","and","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","calc","calc","default","default","dfa_new","epsilon_closure","epsilon_closure","from","from","from","from","from","from","init","init","init","init","init","init","init","init","into","into","into","into","into","into","into_dfa","less","less","multiple_of","multiple_of","new","new","non_zero","non_zero","trans","trans","trans","trans","trans","trans","trans","trans","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id"],"q":[[0,"qitoy_dfa"]],"d":["","文字の型","","","","決定性有限オートマトン","","","","","","","状態の型","","","","受理関数","","","","","","","","<code>f</code>を通じて異なる<code>Alphabet</code>…","<code>f</code>を通じて異なる<code>Alphabet</code>…","<code>Alphabet</code>が同じDFAの積をとる。","<code>Alphabet</code>が同じDFAの積をとる。","","","","","","","","","","","","","DFAを用いたDPを計算する。","DFAを用いたDPを計算する。","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","開始状態","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","<code>n</code>をd進法表記の配列として、d進法で<code>n</code>…","<code>n</code>をd進法表記の配列として、d進法で<code>n</code>…","<code>digit</code>進法で<code>m</code>の倍数になるとき受理する。","<code>digit</code>進法で<code>m</code>の倍数になるとき受理する。","","","非零の数字を受理する。","非零の数字を受理する。","遷移関数","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,2,22,23,0,0,0,23,0,0,0,0,2,22,23,0,2,22,3,5,6,7,8,9,2,2,2,2,3,5,6,7,8,9,3,5,6,7,8,9,2,2,8,9,0,22,22,3,5,6,7,8,9,2,22,3,5,6,7,8,9,3,5,6,7,8,9,23,2,2,2,2,6,7,2,2,2,22,3,5,6,7,8,9,3,5,6,7,8,9,3,5,6,7,8,9,3,5,6,7,8,9],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[],1],[[],1],[[[3,[2,2]]],1],[[[5,[2,4]]],1],[6,1],[7,1],[8,1],[9,1],[[10,4],[[5,[10,4]]]],[[10,4],[[5,[10,4]]]],[[10,2],[[3,[10,2]]]],[[10,2],[[3,[10,2]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[[0,[11,12]],13,14]],[[[0,[11,12]],13,14]],[[],8],[[],9],[[],9],[15,15],[15,15],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],15],[[[3,[2,2]]]],[[[5,[2,4]]]],[6],[7],[8],[9],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[[0,[10,2]],[17,[16]]],[[3,[[0,[10,2]],7]]]],[[[0,[10,2]],[17,[16]]],[[3,[[0,[10,2]],7]]]],[[[0,[10,2]],18,18],[[3,[[0,[10,2]],6]]]],[[[0,[10,2]],18,18],[[3,[[0,[10,2]],6]]]],[[18,18],6],[[[17,[16]]],7],[[[0,[10,2]]],[[3,[[0,[10,2]],8]]]],[[[0,[10,2]]],[[3,[[0,[10,2]],8]]]],[[],19],[19,15],[[[3,[2,2]]],19],[[[5,[2,4]]],19],[6,19],[7,19],[8,19],[9,19],[[],20],[[],20],[[],20],[[],20],[[],20],[[],20],[[],20],[[],20],[[],20],[[],20],[[],20],[[],20],[[],21],[[],21],[[],21],[[],21],[[],21],[[],21]],"c":[],"p":[[15,"bool"],[8,"Dfa"],[3,"And"],[8,"Fn"],[3,"AlphaTrans"],[3,"MultipleOf"],[3,"Less"],[3,"NonZero"],[3,"Unit"],[8,"Sized"],[8,"IntoIterator"],[8,"Clone"],[15,"usize"],[8,"FnMut"],[3,"BTreeSet"],[15,"u8"],[15,"slice"],[15,"u64"],[4,"Option"],[4,"Result"],[3,"TypeId"],[8,"Nfa"],[8,"IntoDfa"]]},\
"qitoy_group":{"doc":"","t":"IIK","n":["Abelian","Group","negate"],"q":[[0,"qitoy_group"]],"d":["","",""],"i":[0,0,1],"f":[0,0,[[]]],"c":[],"p":[[8,"Group"]]},\
"qitoy_hld":{"doc":"","t":"NNDNDEENDDLLLLLLLLLLLLLLLLLLLLLLLMLLLLMLLLLLLLLLLLLMLMMLMLLLLLLLLMLLMLLLMLLLLLLLLLLLLLLLLLLLLLL","n":["Ascend","Descend","Edge","HeavyPath","Hld","HldDirection","HldInterval","LightEdge","Node","Tree","add_egde","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","default","default","depth","deref","deref_mut","eq","equivalent","euler","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from_iter","head","heavy","index","index","into","into","into","into","into","into","is_valid","lca","light","new","new","parent","path_query","set_query","subtree_query","to","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id"],"q":[[0,"qitoy_hld"]],"d":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","<code>self</code>の属するheavy pathの深さ","","","","","オイラーツアーで(in, out)","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","<code>self</code>の属するheavy pathの代表元","heavy childのindex","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","light childのindex","","引数の木について、頂点<code>r</code>…","親のindex","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[6,6,0,5,0,0,0,5,0,0,1,1,3,4,5,6,12,1,3,4,5,6,12,3,4,5,6,3,4,5,6,3,4,4,1,1,3,3,4,3,4,5,6,12,1,1,3,4,5,6,12,3,1,4,4,12,3,1,3,4,5,6,12,1,12,4,1,12,4,12,12,12,3,3,4,5,6,1,3,4,5,6,12,1,3,4,5,6,12,1,3,4,5,6,12],"f":[0,0,0,0,0,0,0,0,0,0,[[1,2,2]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[3,3],[4,4],[5,5],[6,6],[[]],[[]],[[]],[[]],[[],3],[[],4],0,[1],[1],[[3,3],7],[[],7],0,[[3,8],[[10,[9]]]],[[4,8],11],[[5,8],11],[[6,8],11],[[12,8],11],[[[14,[13]]],1],[[]],[[]],[[]],[[]],[[]],[[]],0,[15,1],0,0,[[12,2]],0,[[]],[[]],[[]],[[]],[[]],[[]],[1,7],[[12,2,2],2],0,[2,1],[[1,2],12],0,[[12,2,2],16],[[12,2],2],[[12,2]],0,[[]],[[]],[[]],[[]],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],17],[[],17],[[],17],[[],17],[[],17],[[],17]],"c":[],"p":[[3,"Tree"],[15,"usize"],[3,"Edge"],[3,"Node"],[4,"HldInterval"],[4,"HldDirection"],[15,"bool"],[3,"Formatter"],[3,"Error"],[4,"Result"],[6,"Result"],[3,"Hld"],[3,"Global"],[3,"Vec"],[8,"IntoIterator"],[8,"Iterator"],[3,"TypeId"]]},\
"qitoy_math_montgomery":{"doc":"モンゴメリ乗算","t":"DDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["Montgomery","Mvalue","add","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","eq","fmt","fmt","from","from","into","into","mul","neg","new","pow","sub","to_owned","to_owned","trans","try_from","try_from","try_into","try_into","type_id","type_id","val"],"q":[[0,"qitoy_math_montgomery"]],"d":["モンゴメリ乗算をするための構造体。","モンゴメリ乗算で内部的に使われる型。","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","<code>modulus</code>で前計算をする。ただし<code>modulus</code>…","","","","","<code>val</code>をモンゴメリ乗算用に変換する。","","","","","","","保有している数値を取り出す。"],"i":[0,0,1,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,1,1,2,1,1,1,2,2,1,2,1,2,1,2,1],"f":[0,0,[[1,1]],[[]],[[]],[[]],[[]],[1,1],[2,2],[[]],[[]],[[2,2],3],[[1,4],5],[[2,4],5],[[]],[[]],[[]],[[]],[[1,1]],[1],[6,2],[[1,6],1],[[1,1]],[[]],[[]],[[2,6],1],[[],7],[[],7],[[],7],[[],7],[[],8],[[],8],[1,6]],"c":[],"p":[[3,"Mvalue"],[3,"Montgomery"],[15,"bool"],[3,"Formatter"],[6,"Result"],[15,"u64"],[4,"Result"],[3,"TypeId"]]},\
"qitoy_math_numeric":{"doc":"","t":"IIKK","n":["Gcd","Lcm","gcd","lcm"],"q":[[0,"qitoy_math_numeric"]],"d":["","","",""],"i":[0,0,1,2],"f":[0,0,[[]],[[]]],"c":[],"p":[[8,"Gcd"],[8,"Lcm"]]},\
"qitoy_matrix":{"doc":"","t":"DLLLLLLLLLLLLLLLLLLLLLLLLLL","n":["Matrix","add","add_assign","borrow","borrow_mut","clone","clone_into","column","fmt","from","from","identity","index","index_mut","into","mul","mul_assign","neg","new","pow","row","sub","sub_assign","to_owned","try_from","try_into","type_id"],"q":[[0,"qitoy_matrix"]],"d":["","","","","","","","","","Returns the argument unchanged.","","","","","Calls <code>U::from(self)</code>.","","","","","","","","","","","",""],"i":[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],"f":[0,[[[2,[1]],[2,[1]]]],[[[2,[1]],[2,[1]]]],[[]],[[]],[[[2,[1]]],[[2,[1]]]],[[]],[[[2,[1]]],3],[[[2,[[0,[4,1]]]],5],6],[[]],[[[7,[7]]],[[2,[1]]]],[3,[[2,[1]]]],[[[2,[1]]]],[[[2,[1]]]],[[]],[[[2,[1]],[2,[1]]]],[[[2,[1]],[2,[1]]]],[[[2,[1]]]],[[3,3],[[2,[1]]]],[[[2,[1]],8],[[2,[1]]]],[[[2,[1]]],3],[[[2,[1]],[2,[1]]]],[[[2,[1]],[2,[1]]]],[[]],[[],9],[[],9],[[],10]],"c":[],"p":[[8,"Ring"],[3,"Matrix"],[15,"usize"],[8,"Debug"],[3,"Formatter"],[6,"Result"],[3,"Vec"],[15,"u64"],[4,"Result"],[3,"TypeId"]]},\
"qitoy_mo":{"doc":"","t":"IQKKKKKL","n":["Mo","T","assign","pop_left","pop_right","push_left","push_right","run"],"q":[[0,"qitoy_mo"]],"d":["","","","","","","","query - 区間クエリ（開区間）"],"i":[0,4,4,4,4,4,4,4],"f":[0,0,[[]],[1],[1],[1],[1],[2,3]],"c":[],"p":[[15,"usize"],[15,"slice"],[3,"Vec"],[8,"Mo"]]},\
"qitoy_prelude":{"doc":"","t":"IQQIOOKOOOBK","n":["LowerBound","T","T","UpperBound","chmax","chmin","lower_bound","max","min","mvec","qitoy_utils_bound","upper_bound"],"q":[[0,"qitoy_prelude"]],"d":["","","","","","","","","","","",""],"i":[0,2,3,0,0,0,2,0,0,0,0,3],"f":[0,0,0,0,0,0,[[],1],0,0,0,0,[[],1]],"c":[],"p":[[15,"usize"],[8,"LowerBound"],[8,"UpperBound"]]},\
"qitoy_prime_check":{"doc":"","t":"IK","n":["PrimeCheck","prime_check"],"q":[[0,"qitoy_prime_check"]],"d":["","素数判定をする。"],"i":[0,2],"f":[0,[[],1]],"c":[],"p":[[15,"bool"],[8,"PrimeCheck"]]},\
"qitoy_prime_factorize":{"doc":"","t":"IDLLLKLLLLLLLL","n":["Factorize","Factors","borrow","borrow_mut","factorize","find_factor","from","into","into_iter","next","try_from","try_into","type_id","vzip"],"q":[[0,"qitoy_prime_factorize"]],"d":["","","","","<code>self</code>…","<code>self</code>…","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","","","","","",""],"i":[0,0,1,1,2,2,1,1,1,1,1,1,1,1],"f":[0,0,[[]],[[]],[[],1],[[]],[[]],[[]],[[]],[[[1,[[0,[2,3,4]]]]],5],[[],6],[[],6],[[],7],[[]]],"c":[],"p":[[3,"Factors"],[8,"Factorize"],[8,"Integer"],[8,"Clone"],[4,"Option"],[4,"Result"],[3,"TypeId"]]},\
"qitoy_prime_pi":{"doc":"","t":"","n":[],"q":[],"d":[],"i":[],"f":[],"c":[],"p":[]},\
"qitoy_prime_sieve":{"doc":"","t":"F","n":["eratosthenes"],"q":[[0,"qitoy_prime_sieve"]],"d":["エラトステネスの篩 計算量$<code>O(n \\\\log n)</code>$"],"i":[0],"f":[[1,[[3,[2]]]]],"c":[],"p":[[15,"usize"],[15,"bool"],[3,"Vec"]]},\
"qitoy_red_black_tree":{"doc":"","t":"QIDQLLLLLKLLKLLLLLKLLLLKLLLKLLLLLLLLLL","n":["F","MAct","RedBlackTree","S","apply","borrow","borrow_mut","clone","clone_into","comp","default","dump","e","erase","fmt","from","from","from_iter","id","insert","into","is_empty","len","map","merge","merge3","new","op","prod","rank","reverse","set","split","split3","to_owned","try_from","try_into","type_id"],"q":[[0,"qitoy_red_black_tree"]],"d":["map type","","","element type","","","","","","composition <code>|x| f(g(x))</code>","","","identity element","","","Returns the argument unchanged.","","","identity map","","Calls <code>U::from(self)</code>.","","","mapping <code>f(x)</code>","","","","binary operation","","","","","","","","","",""],"i":[1,0,0,1,2,2,2,2,2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,2,2,2],"f":[0,0,0,0,[[[2,[1]],[4,[3]]],[[2,[1]]]],[[]],[[]],[[[2,[1]]],[[2,[1]]]],[[]],[[]],[[],[[2,[1]]]],[[[2,[1]]],5],[[]],[[[2,[1]],3],[[2,[1]]]],[[[2,[1]],6],7],[[]],[[[10,[[9,[[8,[[0,[1]]]]]]]]],[[2,[1]]]],[11,[[2,[1]]]],[[]],[[[2,[1]],3],[[2,[1]]]],[[]],[[[2,[1]]],12],[[[2,[1]]],3],[3],[[[2,[1]],[2,[1]]],[[2,[1]]]],[[[2,[1]],[2,[1]],[2,[1]]],[[2,[1]]]],[[],[[2,[1]]]],[[]],[[[2,[1]],[4,[3]]]],[[[2,[1]]],[[9,[3]]]],[[[2,[1]],[4,[3]]],[[2,[1]]]],[[[2,[1]],3],[[2,[1]]]],[[[2,[1]],3]],[[[2,[1]],[4,[3]]]],[[]],[[],13],[[],13],[[],14]],"c":[],"p":[[8,"MAct"],[3,"RedBlackTree"],[15,"usize"],[3,"Range"],[3,"Vec"],[3,"Formatter"],[6,"Result"],[3,"Rc"],[4,"Option"],[8,"Into"],[8,"IntoIterator"],[15,"bool"],[4,"Result"],[3,"TypeId"]]},\
"qitoy_rerooting_dp":{"doc":"","t":"DDLLLLLLLLLLLLLLLLMLMLLLLFFMLLLLLLL","n":["Edge","Tree","add_egde","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","default","deref","deref_mut","eq","equivalent","fmt","from","from","from","from","from_iter","index","into","into","is_valid","new","rerooting_dp","rerooting_dp_subtree","to","to_owned","try_from","try_from","try_into","try_into","type_id","type_id"],"q":[[0,"qitoy_rerooting_dp"]],"d":["","","","","","","","","","","","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","",""],"i":[0,0,1,1,3,1,3,3,3,3,1,1,3,3,3,1,1,3,3,1,3,1,3,1,1,0,0,3,3,1,3,1,3,1,3],"f":[0,0,[[1,2,2]],[[]],[[]],[[]],[[]],[3,3],[[]],[[],3],[1],[1],[[3,3],4],[[],4],[[3,5],[[7,[6]]]],[[]],[[[9,[8]]],1],[[]],0,[10,1],0,[[]],[[]],[1,4],[2,1],[[1,11,11],9],[[1,11,11],[[9,[9]]]],0,[[]],[[],7],[[],7],[[],7],[[],7],[[],12],[[],12]],"c":[],"p":[[3,"Tree"],[15,"usize"],[3,"Edge"],[15,"bool"],[3,"Formatter"],[3,"Error"],[4,"Result"],[3,"Global"],[3,"Vec"],[8,"IntoIterator"],[8,"FnMut"],[3,"TypeId"]]},\
"qitoy_ring":{"doc":"","t":"DIQDKLLLLLLLLLLLLLLKLLKLLKLLLLLLLLLLKLL","n":["AddMul","Ring","S","XorAnd","add","add","add","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","from","from","into","into","mul","mul","mul","neg","neg","neg","one","one","one","to_owned","to_owned","try_from","try_from","try_into","try_into","type_id","type_id","zero","zero","zero"],"q":[[0,"qitoy_ring"]],"d":["","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,6,0,6,2,3,2,3,2,3,2,3,2,3,2,3,2,3,6,2,3,6,2,3,6,2,3,2,3,2,3,2,3,2,3,6,2,3],"f":[0,0,0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[[2,[1]]],[[2,[1]]]],[[[3,[1]]],[[3,[1]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],4],[[],4],[[],4],[[],4],[[],5],[[],5],[[]],[[]],[[]]],"c":[],"p":[[8,"Clone"],[3,"AddMul"],[3,"XorAnd"],[4,"Result"],[3,"TypeId"],[8,"Ring"]]},\
"qitoy_rolling_hash":{"doc":"ローリングハッシュ","t":"DELLLLLLLLLLLLLLLLLLLLL","n":["RhVec","RollingHash","binary_operation","borrow","borrow","borrow_mut","borrow_mut","from","from","from_iter","get","identity","into","into","new","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip"],"q":[[0,"qitoy_rolling_hash"]],"d":["ロリハによる文字列検索のための構造体。","ロリハ <code>Monoid</code>として使う。","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","文字<code>c</code>からロリハを生成する。","","","","","","","",""],"i":[0,0,8,8,2,8,2,8,2,2,2,8,8,2,8,8,2,8,2,8,2,8,2],"f":[0,0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[1,2],[[2,[4,[3]]]],[[]],[[]],[[]],[5],[[],6],[[],6],[[],6],[[],6],[[],7],[[],7],[[]],[[]]],"c":[],"p":[[8,"IntoIterator"],[3,"RhVec"],[15,"usize"],[3,"Range"],[15,"char"],[4,"Result"],[3,"TypeId"],[4,"RollingHash"]]},\
"qitoy_semigroup":{"doc":"","t":"QIK","n":["S","SemiGroup","binary_operation"],"q":[[0,"qitoy_semigroup"]],"d":["","",""],"i":[1,0,1],"f":[0,0,[[]]],"c":[],"p":[[8,"SemiGroup"]]},\
"qitoy_tree":{"doc":"","t":"DDLLLLLLLLLLLLLLLLMLMLLLLMLLLLLLL","n":["Edge","Tree","add_egde","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","default","deref","deref_mut","eq","equivalent","fmt","from","from","from","from","from_iter","index","into","into","is_valid","new","to","to_owned","try_from","try_from","try_into","try_into","type_id","type_id"],"q":[[0,"qitoy_tree"]],"d":["","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","",""],"i":[0,0,1,1,3,1,3,3,3,3,1,1,3,3,3,1,1,3,3,1,3,1,3,1,1,3,3,1,3,1,3,1,3],"f":[0,0,[[1,2,2]],[[]],[[]],[[]],[[]],[3,3],[[]],[[],3],[1],[1],[[3,3],4],[[],4],[[3,5],6],[7,1],[[]],[[]],0,[8,1],0,[[]],[[]],[1,4],[2,1],0,[[]],[[],9],[[],9],[[],9],[[],9],[[],10],[[],10]],"c":[],"p":[[3,"Tree"],[15,"usize"],[3,"Edge"],[15,"bool"],[3,"Formatter"],[6,"Result"],[3,"Vec"],[8,"IntoIterator"],[4,"Result"],[3,"TypeId"]]},\
"qitoy_utils_bound":{"doc":"配列上の二分探索をします","t":"IQQIKK","n":["LowerBound","T","T","UpperBound","lower_bound","upper_bound"],"q":[[0,"qitoy_utils_bound"]],"d":["","","","","",""],"i":[0,2,3,0,2,3],"f":[0,0,0,0,[[],1],[[],1]],"c":[],"p":[[15,"usize"],[8,"LowerBound"],[8,"UpperBound"]]},\
"qitoy_utils_float2uint":{"doc":"floatとuintを順序を保って相互変換します","t":"QIIQKK","n":["Float","ToFloat","ToUint","Uint","to_float","to_uint"],"q":[[0,"qitoy_utils_float2uint"]],"d":["","","","","",""],"i":[1,0,0,2,1,2],"f":[0,0,0,0,[[]],[[]]],"c":[],"p":[[8,"ToFloat"],[8,"ToUint"]]},\
"qitoy_wavelet_matrix":{"doc":"","t":"DLLLLLLLLLLLLLLL","n":["WaveletMatrix","access","borrow","borrow_mut","fmt","from","from_iter","from_iter","into","is_empty","len","new","rank","try_from","try_into","type_id"],"q":[[0,"qitoy_wavelet_matrix"]],"d":["Wavelet Matrix","","","","","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","","","max data &lt; 1 &lt;&lt; size","","","",""],"i":[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"f":[0,[[1,2],3],[[]],[[]],[[1,4],5],[[]],[6,1],[6,1],[[]],[1,7],[1,2],[[[8,[3]],2],1],[[1,3,2],9],[[],10],[[],10],[[],11]],"c":[],"p":[[3,"WaveletMatrix"],[15,"usize"],[15,"u64"],[3,"Formatter"],[6,"Result"],[8,"IntoIterator"],[15,"bool"],[3,"Vec"],[15,"u32"],[4,"Result"],[3,"TypeId"]]},\
"qitoy_weighted_dsu":{"doc":"","t":"DLLLLLLLLLLL","n":["WeightedDsu","borrow","borrow_mut","diff","from","into","is_same","merge","new","try_from","try_into","type_id"],"q":[[0,"qitoy_weighted_dsu"]],"d":["","","","if <code>self.is_same(x, y)</code>, <code>Some(f)</code>, where <code>y = f(x)</code> else <code>None</code>","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","are <code>x</code> and <code>y</code> same group","if <code>x</code> and <code>y</code> are same group, return false otherwise, merge …","create new <code>weighted_dsu</code>","","",""],"i":[0,2,2,2,2,2,2,2,2,2,2,2],"f":[0,[[]],[[]],[[[2,[1]],3,3],4],[[]],[[]],[[[2,[1]],3,3],5],[[[2,[1]],3,3],5],[3,[[2,[1]]]],[[],6],[[],6],[[],7]],"c":[],"p":[[8,"Group"],[3,"WeightedDsu"],[15,"usize"],[4,"Option"],[15,"bool"],[4,"Result"],[3,"TypeId"]]},\
"verify":{"doc":"","t":"ILKLO","n":["Verify","check","solve","verify","verify"],"q":[[0,"verify"]],"d":["","","","","verify! {}"],"i":[0,6,6,6,0],"f":[0,[[1,1,1],2],[[1,3]],[4,5],0],"c":[],"p":[[15,"str"],[15,"bool"],[3,"String"],[3,"PathBuf"],[6,"Result"],[8,"Verify"]]},\
"verify_proc":{"doc":"","t":"O","n":["verify"],"q":[[0,"verify_proc"]],"d":["verify! {}"],"i":[0],"f":[0],"c":[],"p":[]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};
