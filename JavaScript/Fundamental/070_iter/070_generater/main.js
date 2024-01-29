// generatorは，上から返していく．
function* gen() {
    yield 1;
    yield 2;
    for (let i = 0; i < 3; i++) {
        yield i;
    }
    return 3;
} 

const it = gen();
console.log(it.next()); // { value: 1,          done: false }
console.log(it.next()); // { value: 2,          done: false }
console.log(it.next()); // { value: 0,          done: false }
console.log(it.next()); // { value: 1,          done: false }
console.log(it.next()); // { value: 2,          done: false }
console.log(it.next()); // { value: 3,          done: true } <- returnで返した時点で，done: trueになる．
console.log(it.next()); // { value: undefined,  done: true }

function* genIterator(max = 10) {
    let i = 0;

    while (i < max) {
        yield i++;
    }
    // return; // return　は省略可能
}

const it2 = genIterator(10);

let a = it.next();
while (!a.done) {
    console.log(a.value);
    a = it.next();
}

const obj = {
    [Symbol.iterator]: genIterator.bind(null, 10)
}

// 省略を頑張ると
const obj2 = {
    *[Symbol.iterator] (max = 10) {
        let i = 0;

        while (i < max) {
            yield i++;
        }
    }
}

for (const i of obj) {
    console.log(i);
}

for (const i of obj2) {
    console.log(i);
}