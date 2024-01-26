function a(name) {
    return 'hello ' + name;
}

const b = function(name) {
    return 'hello ' + name;
}
// 省略して
const c = (name) => {
    return 'hello ' + name;
}

// さらに省略して
// 引数が1つの場合は()も省略できる
// returnが1行の場合は{}とreturnも省略できる
const d = name => 'hello ' + name;

console.log(a('Tom'));
console.log(d('Bob'));

// 一応
const e = (name1, name2) => 'hello ' + name1 + ' and ' + name2;
console.log(e('Tom', 'Bob'));

const f = () => 'hello ';
console.log(f());