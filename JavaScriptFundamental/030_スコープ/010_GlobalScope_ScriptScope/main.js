// let で定義された場合，スクリプトスコープとなる．
let a = 0;

// varやfunction で定義された場合, globalスコープとなる．
var b = 0;
function c() {}

// bはglobalスコープなので，以下のように呼び出すことができるが，グローバルオブジェクトは省略することができる．
// console.log(window.b);
console.log(b);
