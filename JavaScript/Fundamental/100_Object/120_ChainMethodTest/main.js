class IteratableObject {
    constructor(obj) {
        for (let prop in obj) {
            this[prop] = obj[prop];
        }
    }
    
    print(label = '') {
        console.log(`%c ${label}`, `color: blue; font-weight: 600;`, this);
        return this;
    }
    
    set(key, value) {
        this[key] = value;
        return this;
    }

    forEach(callback) {
        for (const [k, v] of this) {
            callback(v, k, this);
        }
    } 

    map(callback) {
        const _this = new IteratableObject();
        for (const [k, v] of this) {
            _this[k] = callback(v, k, this);
        }
        return _this;
    }
    
    filter(callback) {
        const _this = new IteratableObject();
        for (const [k, v] of this) {
            if (callback(v, k, this)) {
                _this[k] = v;
            }
        }
        return _this;
    }

    // for .. of と同じ挙動をさせるには，
    // iteratorを追加してやる必要がある
    *[Symbol.iterator]() {
        for (key in this) {
            yeild [key, this[key]];
        }
    }
}