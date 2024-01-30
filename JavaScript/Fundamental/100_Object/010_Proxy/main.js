const targetObj = {a: 0};
const handler = {
    // トラップする
    set: function(target, prop, value, receiver) {
        console.log(`[set]: ${prop}`);
        // このコメントアウトを適用すれば，setを使えないようにできる
        // throw new Error('error');
        target[prop] = value;
    },
    get: function (target, prop, receiver) {
        console.log(`[get]: ${prop}`);
        return target[prop];
    },
    deleteProperty: function (target, prop) {
        console.log(`[delete]: ${prop}`);
        delete target[prop];
    },
};

const pxy = new Proxy(targetObj, handler);
pxy.a = 1; // [set]: a
pxy.a; // [get]: a
// delete pxy.a; // [delete]: a

