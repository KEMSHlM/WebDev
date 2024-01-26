function a() {
    console.log('hello');
}

// 後からプロパティや関数を追加できる．
// つまり，関数もオブジェクト．
a.prop = 0;
a.method = function() {
    console.log('method');
}

a();
a.method();
console.log(a.prop);