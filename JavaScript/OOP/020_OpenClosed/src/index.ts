interface IEmloyee {
    name: string;
    getBonus(base: number): number;
}

class JuniorEmployee implements IEmloyee {
    constructor (public name: string) {
    }
    
    getBonus(base: number): number {
        return Math.floor(base * 1.1);
    }
}

class MiddleEmployee implements IEmloyee {
    constructor (public name: string) {
    }
    
    getBonus(base: number): number {
        return Math.floor(base * 1.5);
    }
}

class SeniorEmployee implements IEmloyee {
    constructor (public name: string) {
    }
    
    getBonus(base: number): number {
        return Math.floor(base * 2.0);
    }
}

function run() {
    const emp1 = new JuniorEmployee("Yamada");
    const emp2 = new MiddleEmployee("Okuda");
    const emp3 = new SeniorEmployee("Shima");
    
    const base = 100;
    console.log(emp1.getBonus(base));
    console.log(emp2.getBonus(base));
    console.log(emp3.getBonus(base));
}

run();