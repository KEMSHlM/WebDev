function genIterator(max) {
    let i = 0;

    return {
        next: function() {
            if (i < max) {
                return { done: false, value: i++ };
            } else {
                return { done: true };
            }
        }
    };
}

// ここでイテレータを生成．つまり，初期化が行われる．
const it = genIterator(10);

// ここでは，let i = 0; は実行されないので，i++
let a = it.next();

while (!a.done) {
    console.log(a.value);
    a = it.next();
}

// イテレータを変更することができる．
const obj = {
    [Symbol.iterator]: genIterator.bind(null, 10)
}

for (const i of obj) {
    console.log(i);
}

const s = new Set(obj);
console.log(s);