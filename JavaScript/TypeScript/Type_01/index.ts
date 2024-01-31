// javascript コンパイラによっての型推論の結果はホバーして確認できる  
// boolean, number, .. -> タイプアノテーション

let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

let hasValue = true;
// 上は，型推定によって boolean となる. よって以下はエラー  
// hasValue = 20;

let hello = 'hello';

// 上で型の指定．下は値の代入
const person: {
    name: String;
    age: number;
} = {
    name: 'Jack',
    age: 21,
}

console.log(person.age);

// 配列  
const fruits: string[] = ['Apple', 'Banana', 'Grape'];
// 以下はエラー
// fruits.push(21);
console.log(fruits);

// 配列で複数の型を扱う場合.
const book: [string, number, boolean] = ['business', 1500, false];
// 以下はエラー
// book[1] = 'hello'; 
// console.log(book[3]);

// 列挙型  
enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI,
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
}
// 以下はエラー
// coffee.size = 'SHORT';
// enumのみをうけつけるようにできる
coffee.size = CoffeeSize.SHORT;

