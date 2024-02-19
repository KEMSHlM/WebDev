# TypeScript

## OVERVIEW

このマークダウンは，[udemy: 超TypeScript入門](https://www.udemy.com/course/typescript-complete/learn/lecture/17877094#overview)の学習備忘録．

<!--toc:start-->

- [TypeScript](#typescript)
  - [OVERVIEW](#overview)
  - [0. TypeScript導入](#0-typescript導入)
    - [利点](#利点)
  - [1. 型の基本](#1-型の基本)
  - [2. Classの基本](#2-classの基本)
    - [Code](#code)
      - [classの継承](#classの継承)
        - [Code](#code)
      - [classの継承](#classの継承)
      - [getter, setter](#getter-setter)
        - [Code](#code)
      - [static](#static)
      - [abstract](#abstract)
      - [シングルトンパターン](#シングルトンパターン)
      - [interface](#interface)
        - [Code](#code)
  - [バンドルツール](#バンドルツール) - [Webpack](#webpack) - [Vite](#vite) - [メリット](#メリット) - [デメリット](#デメリット)
  <!--toc:end-->

## 0. TypeScript導入

TypeScriptは，JavaScriptのスーパーセットであり，JavaScriptに型を導入した言語である．
静的型付け言語でコンパイルを行うことで，静的に検査することができる．

### 利点

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
ES6にはあまり対応していない? -> そんなことない．

友人にTypeScriptをなぜ使うの？と聞かれた時の回答(永遠のテーマ,　毎日更新)．  
JavaScriptは動的な言語であるため，どんな型の変数を受け取ることができる．これにより, 実行時に致命的なバグを埋め込む可能性がある．  
そこで，TypeScriptからJavaScriptにコンパイルするという手続きを踏むことによって，引数の型精査を行い動作を保証することができる．

## 1. 型の基本

TypeScriptが実行されるまでに，型検査は2回行われる． 一回目は，コンパイル時(tsc)に行われる静的型検査，二回目は, 実行時(JavaScript Engine)に行われる動的型検査である．

## 2. Classの基本

本来，JavaScriptではthisは呼び出し元によって変わるが，TypeScriptではthisを指定することができる．

### Code

#### classの継承

##### Code

```typescript
class Person {
  // readonly節で変更を禁止
  constructor(
    public readonly name: string,
    private age: number,
  ) {}

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

#### classの継承

```typescript
class Person {
  // private のままだと，継承先でもアクセスできない．
  // protected にすることで，継承先のクラスでもアクセスできかつ，外部からアクセスできない．
  constructor(
    public readonly name: string,
    protected age: number,
  ) {}

  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}, I am ${this.age} years old.`);
  }

  incrementAge() {
    this.age += 1;
  }
}

class Teacher extends Person {
  constructor(
    name: string,
    age: number,
    public subject: string,
  ) {
    super(name, age);
  }

  greeting(this: Teacher) {
    console.log(
      `Hello! My name is ${this.name}, I am ${this.age} years old. I teach ${this.subject}.`,
    );
  }
}
```

#### getter, setter

getter, setterは，引数の型が一致する必要がある．

##### Code

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

#### static

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

#### abstract

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

#### シングルトンパターン

シングルトンパターンは，クラスのインスタンスが1つしか存在しないことを保証する．  
 シングルトンパターンは，コンストラクタをprivateにすることで，外部からのインスタンス生成を禁止する．  
 また，staticメンバーを用いることで，クラスのインスタンスを生成する．

```typescript
class OnlyOne {
  private static instance: OnlyOne;
  private constructor(public readonly name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One");
    }
    return OnlyOne.instance;
  }
}
```

#### interface

##### Code

```typescript
interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

const human = {
  name: "Quill",
  age: 38,
  greeting(message: string) {
    console.log(message);
  },
};

// 必ず，implementsで定義されたプロパティとメソッドを実装しなければならない
// またクラスと違い，複数のinterfaceを実装することができる
class Developer implements Human {
  constructor(
    public name: string,
    public age: number,
    public experience: number,
  ) {}
  greeting(message: string) {
    console.log(message);
  }
}
```

## 3. モジュール

ES5以前は，ファイルを分割する明確な手法はなく，基本的にはファイルをhtml内で全て羅列して記載する他なかった．  
ES6になり，モジュールシステムが導入されファイルの分割が容易になった．
最も主流なモジュールシステムは，CommonJSとES6である．

以下は，tsconfig.jsonの書き方．

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    ...
  }
  ...
}
```

以下は，htmlでモジュールを有効化するための設定．

```html
<script src="dist/main.js" type="module"></script>
```

### バンドルツール

プロジェクトを構成するファイル数が増えると，そのファイルを読み込む時間が長くなる．  
複数のファイルを一つのファイルにまとめることで，読み込み時間を短縮することができる．  
現代のフロントエンド開発における主要なビルドツールに，WebpackとViteがある．  
それぞれの異なるアプローチと特徴を持っている.

#### メリット

- モダンでないブラウザでモジュールを使うため．
- http通信を一括で行うため．
- コードの最適化を行うことができる．
- プラグインの追加
  設定ファイルを書くことで，プラグインを追加することができる．
- いろんな種類のファイルを扱うことができる．
  例えば，写真なども組み込むことができる．
- HMR（Hot Module Replacement)付きのローカルサーバーを使うため．
  ファイルを保存するたびに，ブラウザをリロードする必要がない．

#### WebpackとVite

##### Webpack

以下は，webpack.config.jsの書き方．

```js
module.exports = {
  mode: "development",
  entry: "./dist/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // path: __dirname + "/dist",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  publicPath: "/dist/",
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugings: [CleanWebpackPlugin],
};
```

- mode: 出力されるファイルのモードを変更する．
  development, production, noneの3つがある．  
  productionは，一行のファイルに圧縮．
  developmentは, おおよそ元ファイルと構造が同じ状態で出力される．
- entry: entry point
- output: 出力先  
  \_\_dirnameは，絶対パス．
  コメントアウトも同じ挙動．
- devtool: ソースマップを出力するための設定．
- module: モジュールを読み込むための設定．  
  ts-loaderは，WebpackがTypeScriptを読み込むための設定．
- publicPath: ファイルの出力先を変更する(後述)
  これにより，テスト環境と本番環境のファイルパスの混在を防ぐことができる．
- resolve: 拡張子を省略するための設定． .ts, .jsの順番でファイルを探す．
- plugins: 外部プラグイン.

以下は，package.jsonの書き方

```json
{
  ...,
  "scripts": {
    "build": "webpack" --config webpack.config.js",
    "start": "webpack-dev-server --config webpack.config.js --open"
  }
  ...,
}
```

startコマンドを実行すると，webpack-dev-serverが立ち上がる．  
また，ローカル上には`bundle.js`は作成されず，直接メモリ上に作成される．

その際, `localhost:8080/bundle.js`にアクセスすることで，bundle.jsを取得することができる．  
また，publicPathを設定することで，`localhost:8080/dist/bundle.js`にアクセスすることができる．

##### Vite

開発時には，バンドルせず必要なモジュールをリクエストに応じて，動的に提供する．  
現在は，こちらの方が主流である．特に，Vue.jsやReactなどのフレームワークでの使用に適している．

発音は，ヴィートである．英語ではないらしい(Magic Eではない)．

###### メリット

- 高速ビルド  
  Viteは，開発速度を重視して設計されており，開発サーバーが標準で組み込まれているため，開発時にブラウザのリロードを行わなくても，保存したら即時に反映される．

- 高速HMR（Hot Module Replacement)

###### デメリット
