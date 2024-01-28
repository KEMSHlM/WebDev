// 問題１
// 省略

// 問題２
let a = 1;

function fn(num) {
    if ((num === undefined) || (num === null)) {
        num = -1;
    }
    console.log(num);
}

fn(a);

fn(null);
fn(undefined);
fn(0);

// 問題３
function greeting(name, message) {
    message = message || 'hello';
    console.log(message + ' ' + name);
    // shellみたいな書き方もできる．
    // console.log('${message}, ${name}');
}
greeting("Bob", "hi");
greeting("Bob");