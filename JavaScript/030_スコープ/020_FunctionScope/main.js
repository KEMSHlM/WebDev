// 関数スコープ
function a() {
    let b = 0;
    console.log(b);
}

//　以下はエラー
// console.log(b);
a();

// ブロックスコープ
// let, constのみ使用可能
{
    let c = 1;
    console.log(c);
}

// 以下はエラー
// console.log(c);

// 以下は好ましくない．
{
    var d = 1;
    console.log(d);
    
    function e() {
        console.log('e is called');
    }
    
    e();
}

// 以下は実行できてしまう．もはやブロックスコープの意味がない．
e();
console.log(d);

// 以下は好ましくない．
{
    var d = 1;
    console.log(d);
    
    function e() {
        console.log('e is called');
    }
    
    e();
}

// 以下は実行できてしまう．もはやブロックスコープの意味がない．
e();
console.log(d);

// 以下のように，関数はconstで宣言するのが好ましい．
{
    function g() {
        console.log('g is called');
    }
    
    g();
}

// 以下は実行不可．
// g();