export {}

class File {
    constructor(private name: string) {}

    open() {
        console.log(`${this.name}が開かれました．`)
    }

    compress() {
        console.log(`${this.name}が圧縮されました．`)
    }

    close() {
        console.log(`${this.name}が閉じられました．`)
    }
}

interface Command {
    execute();
}

class OpenCommand implements Command {
    constructor(private file: File) {
    }
    
    execute() {
        this.file.open();
    }
}

class ComprssCommand implements Command {
    constructor(private file: File) {
    }
    
    execute() {
        this.file.compress();
    }
}

class CloseCommand implements Command {
    constructor(private file: File) {
    }
    
    execute() {
        this.file.close();
    }
}

class Queue {
    private commands: Command[] = [];
    
    addCommand(command: Command) {
        this.commands.push(command);
    }

    executeCommand() {
        this.commands.forEach(command => command.execute());
    }
}

function run () {
    const file1 = new File("command1.ts");
    const file2 = new File("command2.ts");
    const queue = new Queue();
    
    queue.addCommand(new OpenCommand(file1));
    queue.addCommand(new ComprssCommand(file2));
    queue.addCommand(new CloseCommand(file1));
    
    queue.executeCommand();
}

run();