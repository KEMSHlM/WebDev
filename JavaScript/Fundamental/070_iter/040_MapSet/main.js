// Map, Set データを管理するコレクション

const map = new Map();
const key1 = {};
const key2 = function() {};

map.set(key1, 'value1');
console.log(map.get(key1)); // value1

map.set(key2, 'value2');
console.log(map.get(key2)); // value2

// 初期化も同時に行うことができる
map.set(key3=0, 'value3');
console.log(map.get(0)); // value3

// 削除
map.delete(key3);
console.log(map.get(0)); // undefined

// for in で取得はできない．
console.log("map test:");
for (const [k, v] of map) {
    // key と value を取得
    console.log(k, v);
}

const s = new Set();
s.add(key1);
s.add(key2);
s.add(key2); // 重複しても追加されない
s.add(key3);
s.delete(key3);

console.log("set test:");
for (let k of s) {
    console.log(k);
}