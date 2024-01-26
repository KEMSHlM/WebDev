const a = {
    prop: 0
}

const b = {
    prop: 0
}

// 以下は両方ともfalse．
// だって，a は　{...}の参照だから．
console.log(a === b);
console.log(a == b);

// よって，値を比較した方が妥当の場合が多い．
console.log(a.prop === b.prop);

const c = a;

// これはtrue．そりゃそう．
console.log(a === c);