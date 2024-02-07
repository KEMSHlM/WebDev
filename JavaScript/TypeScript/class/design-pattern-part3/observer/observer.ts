export {}

interface Observer {
    update(name: string);
}

class StoreObserver implements Observer {
    update(name: string) {
        console.log(`${name}が入荷されました．仕入れが可能です．`);
    }
}

class PersonalObserver implements Observer {
    update(name: string) {
        console.log(`${name}が入荷されました．購入が可能です．`);
    }
}

abstract class ItemSubject {
    private observers: Observer[] = [];
    
    constructor(private name: string) {}
    
    attach(observer: Observer): void {
        this.observers.push(observer);
    }
    
    detach(observer: Observer): void {
        this.observers.filter(obs => obs !== observer);
    }
    
    notify(): void {
        this.observers.forEach(obs => obs.update(this.name));
    }
    
    abstract restock();
}

class TvGameSubject extends ItemSubject {
    private inStock: boolean;
    
    constructor(name: string) {
        super(name);
        this.inStock = false;
    }
    
    restock(): void {
        console.log("TVゲームの入荷");
        this.inStock = true;
        this.notify();
    }
}

function run() {
    const store = new StoreObserver();
    const person = new PersonalObserver();
    const tvGame = new TvGameSubject("New RPG Game");
    
    tvGame.attach(store);
    tvGame.attach(person);
    
    tvGame.restock();
}

run();