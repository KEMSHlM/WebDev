// 関数は，宣言される前に呼び出すことができる．
// これは，関数が実行されるより前に，関数の宣言がメモリに読み込まれるため．
a();

function a() {
    // 同様にこれは，エラー
    // console.log(f);
    let f = 0;

    // これは，エラーではない．
    g();
    function g() {
        console.log('g is called');
    }
    console.log('a is called');
}

// undefinedと表示される．エラーではない．
// var は非推奨．
console.log(b);
var b = 0;

console.log(b);

// 一方，varやletで宣言された変数は，宣言される前に呼び出すことはできない．
// 以下の二つでは，エラーが発生する．

// console.log(c);
let c = 0;

// console.log(d);
const d = 0;

// 以下のように，関数が宣言される前に実行されたことになりエラーになる．
// e();

// 以下のように，関数を定義することもできる．
const e = function() {
    console.log('e is called');
}