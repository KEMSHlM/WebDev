interface Vehicle {
    name: string;
    color: string;
}

interface Movable {
    start(): void;
    stop(): void;
}

interface Flyable {
    fly(): void;
}

// interface を使えば，多重継承ができる．
class Airplane implements Vehicle, Movable, Flyable {
    constructor(public name: string, public color: string) {
    }
    
    start() {
        console.log("start!");
    }
    stop() {
        console.log("stop!");
    }
    fly() {
        console.log("fly!");
    }
}

class Car implements Vehicle, Movable {
    constructor(public name: string, public color: string) {
    }
    
    start() {
        console.log("start!");
    }
    stop() {
        console.log("stop!");
    }
}

function run() {
    const v1 = new Airplane("AirBus", "white");
    const v2 = new Car("Prius", "black");
    
    v1.fly();
    v2.start();
}

run();