const items = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
}

// ここは，for..in
Object.prototype[Symbol.iterator] = function* () {
    for (let key in this) {
        yield [key, this[key]];
    }
}

// ここは，for..of
for (let [k, v] of items) {
    console.log(k, v);
}