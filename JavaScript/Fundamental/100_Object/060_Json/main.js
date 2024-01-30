const obj = {a: 0, b: 1, c: 2};

function replacer(key, value) {
    if (value < 1) {
        return;
    }
    return value;
}

// とってくる値を制限する
const json = JSON.stringify(obj, ["a", "b"]);
console.log(json); // {"a":0,"b":1}

const obj2 = JSON.parse(json);
console.log(obj2);
