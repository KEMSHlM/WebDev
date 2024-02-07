export {}

export {};

class Computer {
    // はてなをつけることで，値を持つことは任意になる.
    // これでいいのか？
    // 任意ではないよな．値は必ず欲しいはず
    // type?: string;
    // cpu?: string;
    // ram?: number;
    
    // こっちの方が良さそう．
    public type: string = 'defaultType';
    public cpu: string = 'defaultType';
    public ram: number = 8;
}

interface ComputerBuilder {
    addCpu(cpu: string): void;
    addRam(ram: number): void;
}

class DesktopBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
        this.computer.type = "Desktop";
    }
    
    addCpu(cpu: string) {
        this.computer.cpu = cpu;
    }
    
    addRam(ram: number) {
        this.computer.ram = ram;
    }
    
    getResult(): Computer {
        return this.computer;
    }
}

class LaptopBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
        this.computer.type = "Laptop";
    }
    
    addCpu(cpu: string) {
        this.computer.cpu = cpu;
    }
    
    addRam(ram: number) {
        this.computer.ram = ram;
    }
    
    getResult(): Computer {
        return this.computer;
    }
}

class Director {
    constructor(private builder: ComputerBuilder) {
    }
    
    construct() {
        this.builder.addCpu("Core i5");
        this.builder.addRam(16);
    }
    
    highSpecConstruct() {
        this.builder.addCpu("Core i9");
        this.builder.addRam(64);
    }
}

function run() {
    const desktopBuilder = new DesktopBuilder();
    const desktopDirector = new Director(desktopBuilder);
    desktopDirector.construct();
    const desktopComputer = desktopBuilder.getResult();
    console.log(desktopComputer);
    
    const laptopBuilder = new LaptopBuilder();
    const laptopDirector = new Director(laptopBuilder);
    laptopDirector.highSpecConstruct();
    const laptopComputer = laptopBuilder.getResult();
    console.log(laptopComputer);
}

run();