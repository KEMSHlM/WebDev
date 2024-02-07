interface Human {
    readonly name: string,
    age: number,
    greeting(message: string): void;
}

const human = {
    name: 'Quill',
    age: 38,
    greeting(message: string) {
        console.log(message);
    }
}

// 必ず，implementsで定義されたプロパティとメソッドを実装しなければならない
// またクラスと違い，複数のinterfaceを実装することができる
class Developer implements Human {
    constructor(public name: string, public age: number, public experience: number) {
    }
    greeting(message: string) {
        console.log(message);
    }
}

const user: Human = new Developer('Quill', 38, 3);
// interface にreadonlyをつけると，代入できなくなる
// user.name = 'unko'