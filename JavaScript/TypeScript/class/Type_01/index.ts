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
// enumのみをうけつけるようにできるt
coffee.size = CoffeeSize.SHORT;

let anything: any = true;
let banana = 'banana';
// これはできちゃう．イメージはType Scriptはanyにノータッチ
banana = anything;

// Union型 は，複数の型を許容する
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello'];

// Literal型 は，特定の値のみを許容する
const apple: 'apple' = 'apple';
// const pinapple: 'piapple' = 'apple';
// constで定義したら，Literal型になる
const pinapple = 'apple';
let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
    color: string;
    size: 'small' | 'medium' | 'large';
} = {
    color: 'white',
    size: 'medium',
}

// Typeエイリアス
type ClothSize = 'small' | 'medium' | 'large';
let clothSize2: ClothSize = 'large';

// 関数に型をつける
function add(num1: number, num2: number): number {
    return num1 + num2;
} 
add(3, 2);
// add('hello', 2);
// 以下はTypeScriptは，諦めてany型を引数を受け取る．
function add2(num1, num2): number {
    return num1 + num2;
} 
add2('unko', 2);

// 関数の戻り値にvoid型をつける
function sayHello(): void {
    console.log('Hello!');
}
console.log(sayHello());
let tmp: undefined = undefined;
// returnにundefinedはあまり使わない
function sayHello2(): undefined {
    console.log('Hello!');
    return;
}

// null型
let tmpNull: null = null;

// 関数型を使って，特定の関数のみ代入できるようにする
// これを型注釈という．関数の宣言時と少し異なるので注意．
const anotherAdd: (n1: number, n2: number) => number = add;
const anotherAdd2 = function add(num1: number, num2: number): number {
    return num1 + num2;
}
const doubleNumber: (num: number) => number = num => num * 2;
const doubleNumber2 = (num: number):number => num * 2;

// callback関数に型をつける
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}

// unknown型
let unknownInput: unknown;
unknownInput = 'hello';
// unknown は，条件分岐などで型を絞り込む必要がある
if (typeof unknownInput === 'string') {
    let text: string = unknownInput;
}

// never型
// error関数は，戻り値がないが，never(決して何も返さない)型
function error(message: string): never {
    throw new Error(message);
}

// 省略すると，void型になる
function error2(message: string) {
    throw new Error(message);
}