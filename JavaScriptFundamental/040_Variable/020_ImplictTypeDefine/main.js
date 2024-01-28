function printTypeAndValue(val) {
    console.log(typeof(val), val);
}

let a = 0;
printTypeAndValue(a);

let b = "1" + a;
// 10が出力される
// 型がstringになる
printTypeAndValue(b);

let c = 15 - b;
// 5が出力される
printTypeAndValue(c);

let d = c - null;
// 5が出力される
// nullは0に変換される 
printTypeAndValue(d);

let e = d - true;
// 4が出力される
printTypeAndValue(e);