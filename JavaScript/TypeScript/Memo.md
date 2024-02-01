# TypeScript  
## OVERVIEW  
このマークダウンは，[udemy: 超TypeScript入門](https://www.udemy.com/course/typescript-complete/learn/lecture/17877094#overview)の学習備忘録．  

## 0. TypeScript導入  
TypeScriptは，JavaScriptのスーパーセットであり，JavaScriptに型を導入した言語である．
静的型付け言語でコンパイルを行うことで，静的に検査することができる．  

#### 利点  
- ドキュメントとしての側面  
    型を指定することで可読性が上がり，ドキュメントとしての役割を果たす．  

- Linter としての側面  
    コンパイル時にエラーを検出することで，バグを防ぐ．  
    例え，エラーが検出されても，JavaScriptにコンパイルされる.

- ES5 へのコンパイル  
    target節を指定することで，特定のバージョンにコンパイルすることができる．  

    ```sh
    tsc hoge.ts --target ES5
    ```
    
    TypeScriptの対応状況は，[ES6対応状況](https://compat-table.github.io/compat-table/es6/)を参照．  
    ES6にはあまり対応していない?  

友人にTypeScriptをなぜ使うの？と聞かれた時の回答(永遠のテーマ,　毎日更新)．  
    JavaScriptは動的な言語であるため，どんな型の変数を受け取ることができる．これにより, 実行時に致命的なバグを埋め込む可能性がある．  
    そこで，TypeScriptからJavaScriptにコンパイルするという手続きを踏むことによって，引数の型精査を行い動作を保証することができる． 

## 1. 型の基本  
TypeScriptが実行されるまでに，型検査は2回行われる． 一回目は，コンパイル時(tsc)に行われる静的型検査，二回目は, 実行時(JavaScript Engine)に行われる動的型検査である．  

## 2. Classの基本  
本来，JavaScriptではthisは呼び出し元によって変わるが，TypeScriptではthisを指定することができる．  

#### Code
```typescript
class Person {
    // readonly節で変更を禁止
    constructor(public readonly name: string, private age: number) {
    }
    
    // this はname:stringを持つことを指定できる
    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}, I am ${this.age} years old.`);
    }
    
    incrementAge() {
        this.age += 1;
    }
}
```

```javascript
"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // this はname:stringを持つことを指定できる
    greeting() {
        console.log(`Hello! My name is ${this.name}, I am ${this.age} years old.`);
    }
    incrementAge() {
        this.age += 1;
    }
}
```

- classの継承  
    ```typescript
    class Person {
        // private のままだと，継承先でもアクセスできない．
        // protected にすることで，継承先のクラスでもアクセスできかつ，外部からアクセスできない．
        constructor(public readonly name: string, protected age: number) {
        }
        
        greeting(this: Person) {
            console.log(`Hello! My name is ${this.name}, I am ${this.age} years old.`);
        }
        
        incrementAge() {
            this.age += 1;
        }
    }

    class Teacher extends Person {
        constructor(name: string, age: number, public subject: string) {
            super(name, age);
        } 
        
        greeting(this: Teacher) {
            console.log(`Hello! My name is ${this.name}, I am ${this.age} years old. I teach ${this.subject}.`);
        }
    }
    ```

- getter, setter  
    getter, setterは，引数の型が一致する必要がある．  

    #### Code
    ```typescript
    class Teacher extends Person {
        get subject(): string {
            if (!this._subject) {
                throw new Error('There is no subject.');
            }
            return this._subject;
        }

        // 同じ名前を持つgetter, setter は引数の型が一致する必要がある．
        // value: string のみ受け付ける. 
        set subject(value) {
            if (!value) {
                throw new Error('There is no subject.');
            }
            this._subject = value;
        }
        ...
    }
    ```
    
- static
    staticクラスは，クラス生成前に用意される．
    よって，staticメンバーは，そのクラスのメンバーにはアクセスできない．  
    ```typescript
    class Person {
        ... 
        // staticは，Personクラスが作られる前に，生成されるからメンバにアクセスはできない．
        static isAdult(age: number) {
            if (age > 17) return true;
            else false;
        }
        ... 
    }
    ```
    
- abstract  
    abstract classを用いることで，抽象クラスを作成することができる．

    ```typescript
    abstract class Person {
        ..
        // this はname:stringを持つことを指定できる
        greeting() {
            console.log(`Hello! My name is ${this.name}, I am ${this.age} years old.`);
            this.explainJob();
        }
        abstract explainJob(): void;
        ..
    }

    class Teacher extends Person {
        ..
        explainJob() {
            console.log(`I am a teacher and I teach ${this.subject}.`);
        }
        ..
    }
    ```
    
- シングルトンパターン  
    シングルトンパターンは，クラスのインスタンスが1つしか存在しないことを保証する．  
    シングルトンパターンは，コンストラクタをprivateにすることで，外部からのインスタンス生成を禁止する．  
    また，staticメンバーを用いることで，クラスのインスタンスを生成する．  

    ```typescript
    class OnlyOne {
        private static instance: OnlyOne;
        private constructor(public readonly name: string) {}
        
        static getInstance() {
            if (!OnlyOne.instance) {
                OnlyOne.instance = new OnlyOne('The Only One');
            }
            return OnlyOne.instance;
        }
    }
    ```
    
- interface  
    ```typescript

    #### Code
    interface Human {
        name: string,
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
    ```
