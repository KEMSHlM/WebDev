function fn(a, b) {
    console.log(a, b);
}

// 引数少なくてもエラーにならない．
// また，undefinedが入る．
fn(1);

// 以下の二つ目の定義があると後に書かれた関数が優先される．
// function fn(a, b) {
//     console.log(2);
// }

// argumentsで取り出せる．
function fn2() {
    const a = arguments[0];
    const b = arguments[1];
    
    console.log(arguments);
    console.log(a, b);
}

fn2(1, undefined);

// 最近は，以下のように書く．
// これは，配列として取り出せる．
function fn3(...args) {
    console.log(args);
}
fn3(1, undefined);