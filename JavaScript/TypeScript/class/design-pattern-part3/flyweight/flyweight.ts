export {}

class Stamp {
    constructor(private char: string) {}
    
    print() {
        console.log(this.char);
    }
}

class StampFactory {
    // Mapでも良さそう．
    private pool: {[key: string]: Stamp} = {};
    
    getStamp(char: string): Stamp {
        const stamp = this.pool[char];
        if (stamp) {
            return stamp;
        } else {
            const newStamp = new Stamp(char);
            this.pool[char] = newStamp;
            return newStamp;
        }
    }
    
    getPool() {
        return this.pool;
    }
}

function run() {
    const factory = new StampFactory();
    const stamp1 = factory.getStamp("し");
    const stamp2 = factory.getStamp("ん");
    const stamp3 = factory.getStamp("ぶ");
    const stamp4 = factory.getStamp("ん");
    const stamp5 = factory.getStamp("し");
    
    stamp1.print();
    stamp2.print();
    stamp3.print();
    stamp4.print();
    stamp5.print();
}

// 例え，重複する文字があったとしても，余分なインスタンスは生成されない．
run();