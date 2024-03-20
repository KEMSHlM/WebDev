# OVERVIEW

<!--toc:start-->

- [React](#react)
  - [基本構成](#基本構成)
    - [コンポーネントの作成とネスト](#コンポーネントの作成とネスト)
    - [JSXでマークアップを記述](#jsxでマークアップを記述)
    - [スタイルの追加](#スタイルの追加)
    - [データの表示](#データの表示)
    - [条件付きレンダー](#条件付きレンダー)
    - [リストのレンダー](#リストのレンダー)
    - [イベントに応答する](#イベントに応答する)
    - [画面の更新](#画面の更新)
    - [コンポーネント間のデータの共有](#コンポーネント間のデータの共有)
  - [チュートリアル](#チュートリアル)
  <!--toc:end-->

# React

## 基本構成

### コンポーネントの作成とネスト

Reactアプリはコンポーネントで構成されている．コンポーネントとは，独自のロジックと外見を持つUIの部品である．  
コンポーネントは，ボタンのような小さなものである場合も，ページ全体を表す大きなものである場合もある．

```js
function MyButton() {
  return <button>I'm a button.</button>;
}
```

MyButtonを宣言したら，別のコンポーネントにネストすることができる．

```js
export default function MyApp() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <MyButton />
    </div>
  );
}
```

結果は，[コンポーネントの作成とネスト](./react-quickStart/01-component_nest)に載せている．

<img src=".img/screenshot_20240309_034023.png" alt="nil">

### JSXでマークアップを記述

上でみたマークアップ構文は，JSXと呼ばれるもである．使用は任意であるが，その便利さ故にほとんどのReactプロジェクトではJSXが使用されている．  
JSXは，HTMLより構文が幻覚である．`<br />`のようにタグは閉じる必要がある．  
また，コンポーネントは複数のJSXタグをreturnすることはできない．`<div></div>`や空の`<>...</>`ラッパのような共通の親要素で囲む必要がある．

```js
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}
```

JSXに変換する必要がある場合，オンラインコンバータを使うことが可能．

### スタイルの追加

Reactでは，CSSクラスを`className`で指定する．HTMLのclass属性と同じ方法で動作する．

```html
<img className="avater" />
```

そして，別のCSSファイルに対応するCSSルールを記述する．

```css
.avatar {
  border-radius: 50%;
}
```

### データの表示

JSXを使うことで，JavaScript内にマークアップを入れることができる．波括弧を使うことで，逆にJSXの中からJavaScriptに「戻る」ことができ，コード内の変数を埋め込んで，ユーザに表示することができる．

```js
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
```

`style={{}}`は特別な構文ではない．**`style={ }`というJSXの波括弧内にある通常の`{}`オブジェクト**である．
スタイルがJavaScript変数に依存する場合は，`style`属性を使用することができる．

結果は，[CSSによるマークアップ](./react-quickStart/02-CSS)に載せている．

### 条件付きレンダー

Reactには，条件分岐を書くための特別な構文は存在しない．  
代わりに通常のJavaScriptコードを書くときに使うのと同じ手法を使う．

```js
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LogginForm />;
}
return <div>{content}</div>;
```

3項演算子を使うことで，コンパクトにすることも可能．

```js
<div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>
```

else側の分岐が不必要な場合，短い論理`&&`構文を使うことができる．

```js
<div>{isLoggedIn && <AdminPanel />}</div>
```

### リストのレンダー

コンポーネントのリストをレンダーする場合は，forループや配列のmap()関数といったJavaScriptの機能を使って行う．

```js
const products = {
  {title: 'Cabbage', id: 1},
  {title: 'Garlic', id: 2},
  {title: 'Apple', id: 3},
}
```

コンポーネント内で，map()関数を使って商品の配列を`<li>`要素の配列に変換する．

```js
const listItems = products.map(product => <li key={product.id}>{product.title}</li>);

return ()
  <ul>
    {listItems}
  </ul>
);
```

`<li>`に`key`属性があることに注意する．
リスト内の各項目には，兄弟の中でそれを一意に識別するための文字列または数値を渡す必要がある．  
通常，keyはデータから決まるはずで，データベース上のIDなどが該当する．  
Reactは，あとでアイテムを挿入，削除，並べ替えることがあった際に，何が怒ったかをkeyを使って把握する．

<img src=".img/screenshot_20240309_044958.png" alt="nil">

結果は，[CSSによるマークアップ](./react-quickStart/03-list)に載せている．

### イベントに応答する

コンポーネントの中で，イベントハンドラ関数を宣言することで，イベントに応答することができる．

```js
function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    // hanldeClick()ではなく，handleClickを渡す
    <button onClick={handleClick}>Click me</button>
  );
}
```

`onclick={handleClick}`の末尾に括弧がないことに注意する．  
そこで，イベントハンドラ関数を呼び出すわけではない．

### 画面の更新

しばしば，コンポーネントに情報を「記憶」させて表示させたい場合がある．  
例えば，ボタンがクリックされた回数を覚えて置きたい場合などが当てはまる．  
これを行うには，コンポーネントにstateを追加する．

まず，Reactから`useState`をimportする．  
そして，コンポーネント内にstate変数を宣言することができる．

```js
function MyButton() {}
  const [count, setCount] = useState(0);
  // ...
}
```

`useState`から2つのものが得られる．現在のstate(count)と，それを更新するための関数(setCount)である．  
名前は任意であるが，慣習的に`[something, setSomthing]`のように記述する．

ボタンが初めて表示されるときに，countは0である．

```js
import { useState } from "react";

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
```

以下に示すデモから，二つのボタンがそれぞれの状態を持っているのがわかる．  
結果は，[Stateの管理(それぞれ独立した状態管理)](./react-quickStart/04-state)に載せている．

### コンポーネント間のデータの共有

前述の例では，それぞれの`MyButton`が独立した`count`を持っており，ボタンがクリックされるたびにクリックされたボタンの`count`だけが更新された．

<img src='https://ja.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_data_child_clicked.dark.png&w=640&q=75' width=500>

また，コンポーネント間データを共有し，一緒に更新したいということもある．  
両方の`Mybutton`コンポーネントが同じ`count`を表示し，一緒に更新されるようにするには，状態を個々のボタンから「上に」移動して，それら全てを含む最も近いコンポーネントに入れる．

<img src='https://ja.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fsharing_data_parent_clicked.dark.png&w=640&q=75' width=500>

こうすることによって，どちらのボタンをクリックしても，MyAppのcountが更新され，連動して`MyButton`の両方のカウントが更新される．  
以下は，コードで表現する方法である．

```js
import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
```

結果は，[Stateの管理(共有された状態管理)](./react-quickStart/05-state2)に載せている．

## チュートリアル

このチュートリアルは，小さな三目並べゲーム(tic-tac-toe)を作成する．

結果は，[Tic Tac Toe](./react-quickStart/06-tic-tac-toe/)に載せている．

## Reactの流儀

<img src="https://ja.react.dev/images/docs/s_thinking-in-react_ui_outline.png" width=500 />
