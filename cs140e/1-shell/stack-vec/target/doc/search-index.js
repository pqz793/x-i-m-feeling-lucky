var N=null,E="",T="t",U="u",searchIndex={};
var R=["stack_vec","stackvec","usize","result","StackVec"];

searchIndex[R[0]]={"doc":E,"i":[[3,R[4],R[0],"A contiguous array type backed by a slice.",N,N],[11,"new",E,"Constructs a new, empty `StackVec<T>` using `storage` as…",0,[[],[R[1]]]],[11,"with_len",E,"Constructs a new `StackVec<T>` using `storage` as the…",0,[[[R[2]]],[R[1]]]],[11,"capacity",E,"Returns the number of elements this vector can hold.",0,[[["self"]],[R[2]]]],[11,"truncate",E,"Shortens the vector, keeping the first `len` elements. If…",0,[[["self"],[R[2]]]]],[11,"into_slice",E,"Extracts a slice containing the entire vector, consuming…",0,[[]]],[11,"as_slice",E,"Extracts a slice containing the entire vector.",0,[[["self"]]]],[11,"as_mut_slice",E,"Extracts a mutable slice of the entire vector.",0,[[["self"]]]],[11,"len",E,"Returns the number of elements in the vector, also…",0,[[["self"]],[R[2]]]],[11,"is_empty",E,"Returns true if the vector contains no elements.",0,[[["self"]],["bool"]]],[11,"is_full",E,"Returns true if the vector is at capacity.",0,[[["self"]],["bool"]]],[11,"push",E,"Appends `value` to the back of this vector if the vector…",0,[[["self"],[T]],[R[3]]]],[11,"pop",E,"If this vector is not empty, removes the last element from…",0,[[["self"]],["option"]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"try_from",E,E,0,[[[U]],[R[3]]]],[11,"try_into",E,E,0,[[],[R[3]]]],[11,"into",E,E,0,[[],[U]]],[11,"borrow",E,E,0,[[["self"]],[T]]],[11,"borrow_mut",E,E,0,[[["self"]],[T]]],[11,"type_id",E,E,0,[[["self"]],["typeid"]]],[11,"fmt",E,E,0,[[["formatter"],["self"]],[R[3]]]]],"p":[[3,R[4]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);