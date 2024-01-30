const wm = new WeakMap();

export class Person {
    constructor(name) {
        wm.set(this, {
            name 
        });
    }
    
    hello() {
        console.log(`Hello ${wm.get(this).name}`)
    }
}