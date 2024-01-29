console.log("test1");
function fn() {
    let a;
    if (true) {
        a = 'fn called';
    }
    return a;
}
const result = fn();
console.log(result);

console.log("test2");

let val = 'val1';
function fn2() {
    console.log(val); // 期待値: val1
    
    if (true) {
        let val = 'val2';
        console.log(val); // 期待値: val2
    }

    console.log(val); // 期待値: val1
}
fn2();

console.log("test3");

// 外部からアクセスできないようにする
{
    let num = 0;
    function increment() {
        num = num + 1;
        console.log(num);
    }
}

increment();
increment();
increment();
increment();