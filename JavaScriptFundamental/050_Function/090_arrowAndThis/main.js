window.name = 'John';

// レキシカルスコープは，関数が定義された場所によって決まる
// すなわちここでの定義はグローバルスコープがレキシカルスコープになる．
const a = () => console.log('Bye ' + this.name);

const person = {
    name: 'Tom',
    hello_noname() { // これは無名関数
        console.log('Hello ' + this.name);
        a();
    },
    
    // これはアロー関数
    // 無名関数はthisを持たない，そのためスコープチェーンで上の階層にthisを探しに行く
    hello_arrow: () => {
        console.log('Hello ' + this.name);
        a();
    }
}

// thisを持つ
person.hello_noname(); // Hello John
// thisを持たない
person.hello_arrow(); // Hello John
