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
