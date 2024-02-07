export {}

class Memento {
    private date: string = new Date().toLocaleString();
    
    protected constructor(protected memo: string) {
    }
    
    getMemo(): string {
        return this.memo;
    }
    
    getInfo(): string {
        return `${this.date} / (${this.memo})`;
    }
}

class Notepad extends Memento {
    constructor(memo: string) {
        super(memo);
    }
    
    updateMemo(memo: string) {
        this.memo = memo;
    }
    
    save(): Memento {
        console.log("メモを保存しました");
        return new Memento(this.getMemo());
    }
    
    restore(memento: Memento) {
        this.updateMemo(memento.getMemo());
    }
}

class Caretaker {
    constructor(
        private notepad: Notepad, 
        private mementos: Memento[] = []
    ) {}
    
    backup() {
        this.mementos.push(this.notepad.save());
    }
    
    undo() {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();
        this.notepad.restore(memento);
    }
    
    showHistory() {
        this.mementos.forEach(memento => console.log(memento.getInfo()));
    }
}

function run() {
    const notepad = new Notepad("first memo");
    const caretaker = new Caretaker(notepad);
    caretaker.backup();
    
    notepad.updateMemo("second memo");
    caretaker.backup();
    notepad.updateMemo("third memo");
    caretaker.backup();
    
    console.log(notepad.getMemo());
    caretaker.showHistory();
    
    console.log("");
    caretaker.undo();
    console.log(notepad.getMemo());
    caretaker.undo();
    console.log(notepad.getMemo());
    caretaker.undo();
    console.log(notepad.getMemo());
    caretaker.undo();
    console.log(notepad.getMemo());
    
    caretaker.showHistory();
}

run();