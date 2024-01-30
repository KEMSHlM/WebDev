class MyArry extends Array {
    constructor(...args) {
        super(...args);
    }
    
    print(label = '') {
        console.log(`%c ${label}`, 'color: blue; font-weight: 600;', this);
        return this;
    }
    
    push(val) {
        super.push(val);
        return this;
    }
    
    //　返り値を持たない
    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
    
    //　返り値を持つ
    map(callback) {
        const arry = new MyArry();
        for (let i = 0; i < this.length; i++) {
            arry.push(callback(this[i], i, this));
        }
        return arry;
    }
    
    filter(callback) {
        const arry = new MyArry();
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                arry.push(this[i]);
            }
        }
        return arry;
    }
    
    reduce(callback, accu) {
        let accuIsNotPassed = accu === undefined;
        for (let i = 0; i < this.length; i++) {
            if (accuIsNotPassed) {
                accu = this[i];
                accuIsNotPassed = false;
                continue;
            }
            accu = callback(accu, this[i], i, this);
        }
        return accu;
    }
}

function double(v, i, obj) {
    return v * 2;
}

const original = new MyArry(1, 2, 3, 4, 5);
const result = original
    .map(double)
    .push(5)
    .filter(function (v, i) {
        return v > 2;
    })
    .reduce(function (accu, curr) {
        return accu + curr;
    });

console.log('%coriginal', 'color: blue; font-weight: 600;', original);
console.log('%cresult', 'color: blue; font-weight: 600;', result);