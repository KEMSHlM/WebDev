// WeakMap

const wm = new WeakMap();

const o = {};
wm.set(o, 'value1');

// o = null; // oがnullになったタイミングでWeakMapのkeyも消える
// o = {};
console.log(wm.get(o)); // value1
console.log(wm.has(o)); // value1
console.log(wm.delete(o)); // value1
console.log(wm.delete(o)); // value1
