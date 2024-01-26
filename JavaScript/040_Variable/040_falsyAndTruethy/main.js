// false, null, 0, '', undefined, NaN は全てfalsyとして扱われる
// それ以外は全てtruethyとして扱われる

let a;
console.log(Boolean(a));
console.log(Boolean(NaN));
console.log(Boolean(''));