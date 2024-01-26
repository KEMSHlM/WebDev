function a() {
    console.log("a is called");
}

a();

let b = (1 + 2) * 3;
console.log(b);

// 即時実行関数
// 関数スコープを利用して，外部からアクセスできないようにする
let c = (function (d) {
    console.log("values is " + d);
    return 0;
})(10)

// クラスみたいなものを作れる．
let e = (function() {
    let privateVal = 10;
    let publicVal = 20;
    
    let privateFn = function() {
        console.log("privateFn is called");
    }
    let publicFn = function() {
        console.log("publicFn is called" + publicVal++);
    }
    
    return {
        publicVal: publicVal,
        publicFn: publicFn
    };
})()

e.publicFn();
e.publicFn();
e.publicFn();