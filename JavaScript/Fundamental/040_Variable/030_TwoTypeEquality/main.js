function printEquality(a, b) {
    console.log(a === b);
    console.log(a == b);
}

let a = 1;
let b = '1';
let c = true;

console.log("1 vs '1'");
printEquality(a, b);
console.log("1 vs true");
printEquality(a, c);

let e = '';
let f = 0;
let g = false;

console.log("'' vs 0");
printEquality(e, f);

console.log("'' vs false");
printEquality(e, g);