const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
}

//　Objectを変更すると，全体に影響を与えるので，通常は行わない．
Object.prototype[Symbol.iterator] = function () {
    const keys = Object.keys(this);
    console.log("keys is " + keys);

    let i = 0;
    // レキシカルスコープ，thisを束縛してやる必要がある
    let _this = this;
    return {
        next() {
            let key = keys[i++];
            // console.log(_this);
            return {
                value: [key, _this[key]],
                done: i > keys.length,
            }
        }
    }
}
