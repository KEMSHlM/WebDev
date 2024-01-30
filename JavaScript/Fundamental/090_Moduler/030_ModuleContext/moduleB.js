import './moduleA.js';

// moduleの中では，thisはundefined
const a = 0;
console.log(this)
function fn() {
    console.log(this)
}
fn();

const obj = {
    fn
}
obj.fn();

console.log(window.d)