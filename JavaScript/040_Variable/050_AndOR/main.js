const a = 0;
const b = 1;
const c = 3;
const d = 1;


console.log("0vs1");
// 最初にfalesyになった値を返す．両方truethyなら後者を返す.
console.log(a && b);
// truethyが見つかった時点でその値を返す．
console.log(a || b);

console.log("3vs1");
// 両方truethyなら後者を返す．
console.log(c && d);
// truethyが見つかった時点でその値を返す．
console.log(c || d);