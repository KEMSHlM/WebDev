export {}

interface Shape {
    getArea(): number;
}

class Rectangle implements Shape {
    private width = 0;
    private height = 0;
    
    setWidth(width: number) {
        this.width = width;
    }
    setHeight(height: number) {
        this.height = height;
    }
    getArea(): number {
        return this.height * this.width;
    }
}

class Square implements Shape {
    private length = 0;
    
    setLength(length: number) {
        this.length = length;
    }
    getArea(): number {
        return this.length * this.length;
    }
}

function f(shape: Shape) {
    console.log(shape.getArea());
}

function run() {
    const r1 = new Rectangle();
    r1.setHeight(3);
    r1.setWidth(4);
    f(r1);

    const r2 = new Square();
    r2.setLength(3);
    f(r2);
}

run();