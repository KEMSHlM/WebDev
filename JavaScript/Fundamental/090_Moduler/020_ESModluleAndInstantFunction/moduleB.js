import { publicFn as fn, publicVal as val } from './moduleA.js'

fn();
fn();
fn();
// プリミティブはコピーなので，変更されない
// console.log(val++); // 10
// console.log(val++); // 10
// 参照であれば，大丈夫
console.log(val.prop++); // 10
console.log(val.prop++); // 10
fn();