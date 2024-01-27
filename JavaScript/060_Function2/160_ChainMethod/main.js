class Calculator {
    constructor(value) {
        this.value = 0;
    }

    set(value) {
        this.value = value;
        return this;
    }

    add(value) {
        this.value += value;
        return this;
    }

    multiply(value) {
        this.value *= value;
        return this;
    }

    substract(value) {
        this.value -= value;
        return this;
    }

    divide(value) {
        this.value /= value;
        return this;
    }
}

const calc = new Calculator();

console.log(calc.set(10).add(5).value);
