const targetObj = {
    a: 0,

    get value() {
        // console.log(this);
        return this.b;
    },
};

const handler = {
    get: function (target, prop, receiver) {
        // console.log(receiver);
        console.log(`[get]: ${prop}`);
        if (target.hasOwnProperty(prop)) {
            return Reflect.get(target, prop, receiver);
        } else {
            return -1; 
        }
    },
    deleteProperty: function (target, prop) {
        console.log(`[delete]: ${prop}`);
        delete target[prop];
    },
};

const pxy = new Proxy(targetObj, handler);
console.log(pxy.value);
// console.log(pxy.b);