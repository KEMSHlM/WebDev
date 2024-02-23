# HTML 入門

<!--toc:start-->

- [HTML 入門](#html-入門)
  - [OVERVIEW](#overview)
  - [HTMLとは](#htmlとは)
  - [タグの基礎知識](#タグの基礎知識)
  - [HTMLの属性](#htmlの属性)
  - [HTMLのバージョンとDOCTYPE宣言](#htmlのバージョンとdoctype宣言)
  - [HTML基本構成](#html基本構成)
  - [body](#body)
  - [HTML構成要素](#html構成要素)
    - [基本的な要素](#基本的な要素)
    - [空要素](#空要素)
    - [属性](#属性)
      - [論理属性](#論理属性)
    - [HTMLにCSSとJavaScriptを追加する．](#htmlにcssとjavascriptを追加する)
  - [HTMLの基礎](#htmlの基礎)
    - [見出しと段落](#見出しと段落)
    - [リスト](#リスト)
    - [強調と重要性](#強調と重要性)
  - [ハイパーリンク](#ハイパーリンク)
    - [文章フラグメント](#文章フラグメント)
    - [リンクに関する良い習慣](#リンクに関する良い習慣)
      - [ダウンロードへのリンクをdownload属性を使う](#ダウンロードへのリンクをdownload属性を使う)
      - [メールのリンク](#メールのリンク)
  - [引用](#引用) - [ブロック引用](#ブロック引用)
  <!--toc:end-->

HTML学習記録.

## OVERVIEW

[HTML入門](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML)の備忘録

MarkdownでHtmlタグかけるので，その際は，そのまま記述する．

## HTMLとは

HTML（HyperText Markup Language）は, Webページを作成するための言語. HTMLは, Webページの構造を記述するための言語であり, Webページの見た目を記述するための言語ではない．Webページの見た目を記述するための言語はCSS（Cascading Style Sheets）である．

このHyperTextとは, ハイパーリンクを持つテキストのことであり, ハイパーリンクとは, クリックすると別のWebページに移動することができるリンクのことである．  
そしてMarkupとは，タグなどを使って文書の構造を記述することである．

## タグの基礎知識

HTMLでは, タグを使って文書の構造を記述する．タグは, `<` と `>` で囲まれた部分であり, 以下のような形をしている．

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>ここにページタイトルが入ります.</title>
  </head>
  <body>
    ここにページの内容が入ります．
  </body>
</html>
```

html, head, bodyタグは，通常インデント利用する．

## HTMLの属性

属性とは，タグに付ける追加情報のことである．属性は, タグの中に書く．属性は, `属性名="属性値"` という形をしている．  
また，複数の属性をつける場合は，スペースで区切る．

```html
<html lang="ja"></html>
```

- global属性

  - herf属性は, リンク先のURLを指定する．

    ```html
    <a href="https://www.mozilla.org/ja/">Mozilla</a>
    ```

    実装： <a href="https://www.mozilla.org/ja/">Mozilla</a>

  - title属性は, ツールチップの内容を指定する．  
     ホバーすると，ツールチップが表示される．

    ```html
    <a href="https://www.mozilla.org/ja/" title="Mozillaのホームページ"
      >Mozilla</a
    >
    ```

    実装： <a href="https://www.mozilla.org/ja/" title="Mozillaのホームページ">Mozilla</a>

  - class属性: 要素にクラス(分類名)を付ける．

  - title属性: 要素にタイトルを付ける．

  - lang属性: 言語を指定する．

## HTMLのバージョンとDOCTYPE宣言

最新のバージョンはHTML5.1.
HTML5からDOCTYPE宣言は，不要になった．  
しかしながら，つけないと互換モードで表示される可能性があるので，つけることが推奨されている．  
`<!DOCTYPE html>`

## HTML基本構成

基本構成を[index.html](./index.html)に示す．

以下，index.htmlの内容．

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

以下，レンダリング結果．  
<img src=./img/index.html.png width=300>

1. `<!DOCTYPE html>`: 文書型定義
2. `<html></html>`: HTML文書のルート要素
3. `<head></head>`: メタ情報を含む要素  
   ページ閲覧者がに見せるべきではない情報を載せるコンテナの役割を持つ．  
   これには，検索結果に現れるキーワードやページの説明，内容をスタイル設定するためのCSS, 文字セットの宣言などが含まれる．

4. `<meta charset="UTF-8">`: 文字エンコーディングを指定  
   `<meta>`は，ページのメタ情報を含む要素であり，charset属性は，ページの文字エンコーディングを指定する．

5. `<title></title>`: ページのタイトルを指定
   これは，ブラウザのタブに表示されるタイトルであり，検索結果に表示されるタイトルでもある．

6. `<body></body>`: ページのコンテンツを含む要素
   要素．テキスト，画像，動画，ゲームなど，ページに表示するコンテンツを含む．

## body

- コンテンツ・モデル  
   コンテンツモデルとは，要素がどのような要素を子要素として持つことができるかを示すものである．

- 要素のカテゴリー  
   要素を分類するためのカテゴリーがある．  
   属性は，要素に関する追加情報を提供するため，区別する.

  HTML5では，以下の7つのカテゴリーがある．

  - Metadata content  
     ページの情報を指定する要素などが分類される．基本的には画面に表示されない部分．

  - Flow content  
     body要素の中から基本的にどこでも配置することができる要素．  
     ほとんどの要素がこのカテゴリーに属する．

  - Sectioning content  
     章，節，見出し

## HTML構成要素

### 基本的な要素

```html
<p>My cat is very grumpy</p>
```

- 開始タグ: `<p>`
  要素名(この場合は段落を表すp), 囲んでる開き山括弧と閉じ山括弧で構成される．  
  この場合，段落が始まる位置．

- 内容: My cat is very grumpy
  要素の内容．この場合，段落の内容．

- 終了タグ: `</p>`
  要素名の前にスラッシュをつけたもの．  
  この場合，段落が終わる位置．

### 空要素

要素によっては，単一のタグで構成される場合がある．そのような要素を空要素と呼ぶ．

例えば，以下の

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon"
/>
```

> [!TIP]  
> **メモ**: HTML では, 例えば `<img src="images/cat.jpg" alt="cat" />` のように, 空要素のタグの末尾に `/` を追加する必要はない．しかし,これは有効な構文であり, HTML を有効な XML にしたい場合に使うことがある.

### 属性

要素は次のように属性(Attribute)を持つことができる．

```html
<p class="editor-note">My cat is very grumpy</p>
```

属性は，実際のコンテンツの中で表示させたくない，要素に関する追加情報を保有する．  
この例は，`class`属性は要素をスタイル情報の対象とするために使用される識別子である．

属性をつけることで，リンクを載せることができる．  
以下の`<a>`がそのanchor要素である．

```html
<p>
  A link to my
  <a
    herf="https://www.mozilla.org/"
    title="The Mozilla homepage"
    target="_blank"
    >favorite website</a
  >.
</p>
```

#### 論理属性

沢山のHTMLソースをみていくうちに，属性値のない属性を見かけることがある．

```html
<input type="text" disabled />
```

これは，input要素にユーザが入力できないようにするためのdisabled属性がある ．

### HTMLにCSSとJavaScriptを追加する．

`<link>`要素は，外部のCSSファイルをHTMLページにリンクするために使用される．各場所は，`<head>`要素内に配置される．

```html
<link rel="stylesheet" href="my-css-file.css" />
```

`<script>`要素もヘッド部に入れるべきである．`defer`属性を指定してやると，ページのHTMLの解析が完了した後にJavaScriptを読み込む.

## HTMLの基礎

### 見出しと段落

段落は，`<p>`要素で作成する．  
見出しは，`<h1>`から`<h6>`までの要素で作成する．  
h1が最も大きく，h6が最も小さい．

例とて，物語を考える．`<h1>`は物語の題名を表し，`<h2>`は章の題名を表し，`<h3>`は節の題名を表す．

**注意**

- できれば，1ページに1つの`<h1>`を使用するのが望ましい．
- `<h2>`より先に`<h3>`要素を使用するのはよくない．
- 理想は，`<h3>`までのレベルにする．

**考慮すべき点**

- 検索エンジンは，見出しのコンテンツをページの検索ランクに影響する重要なキーワードとして扱うから，見出しがないとSEO(検索エンジンの最適化)の点でよくない．
- CSSでコンテンツをスタイリングしたり，JavaScriptでコンテンツを操作する際に，見出し要素を使用することが多い．

### リスト

以下のように，`<ul>`で囲み`<li>`(list item)で囲むことで，**順序なしリスト**を作ることができる．

```html
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

以下のように，`<ol>`で囲み`<li>`(list item)で囲むことで，**順序ありリスト**を作ることができる．

```html
<ol>
  <li>Drive to the end of the road</li>
  <li>Turn right</li>
  <li>Go straight across the first two roundabouts</li>
  <li>Turn left at the third roundabout</li>
  <li>The school is on your right, 300 meters up the road</li>
</ol>
```

### 強調と重要性

強調を表す`<em>`要素と，重要性を表す`<strong>`要素がある．

## ハイパーリンク

webをwebたらしめる機能．  
ブロックレベル要素を含む，ほぼ全てのコンテンツをリンクにすることができる．

以下は，見出しがリンクになるパターン．

```html
<a herf="https://developer.mozilla.org/ja/">
  <h1>MDN Web Docs</h1>
</a>
<p>2005年から，CSS,HTML，JavaScriptなどのウェブ技術を文章化している．</p>
```

タイトル属性による補足情報の追加もできる．

```html
<p>
  <a
    href="https://www.mozilla.org/ja/"
    title="Mozilla の使命と協力方法について調べる最適な場所"
  >
    Mozilla ホームページ</a
  >へのリンクを作成しています。
</p>
```

### 文章フラグメント

文章フラグメントとは，ページ内の特定の場所に直接リンクするためのものである．

```html
<!-- 文章のフラグメントを指定する． -->
<h2 id="Mailing_address">Mailing address</h2>
<!-- 文章のフラグメントにアクセスする． -->
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

### リンクに関する良い習慣

#### ダウンロードへのリンクをdownload属性を使う

ダウンロード属性を使用して，規定の保存ファイル名を指定できる．

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe"
>
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

#### メールのリンク

以下は，宛先を指定した空のメールを作成する．

```html
<a href="mailto:nowhere@mozilla.org">メールをどこにも送信しません</a>
```

- `mailtto:nowhere@mozilla.org`
- `mailtto:nowhere@mozilla.org?cc=nobody@mozilla.org`

## 他のテキスト整形

ブラウザが認識するためのルール的なものが多い．

### 引用

HTMLには，引用をマークアップするための機能もある．  
どちらの要素を使用するかは，ブロックとインラインのどちらの引用をマークアップするかによって異なる．  
先ほどのリンクは，内部リンクで今からは外部リンク??

#### ブロック引用

以下は，ブロック引用を利用する手順．

```html
<p>こちらが引用です。</p>
<blockquote
  cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/blockquote"
>
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

**引用する際のルール**
ブロックレベルの内容の一部が他の場所から引用されている場合，`<blockquote>`要素で囲み，`cite`属性の中に引用元を指すURLを記載する必要がある．

#### インライン引用

インライン引用の際は，`<q>`要素を使用する．

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/ja/docs/Web/HTML/Element/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

### 略語

略語を定義する際には，`<abbr>`要素を使用する．

```html
<p>
  We use <abbr>HTML</abbr>, Hypertext Markup Language, to structure our web
  documents.
</p>

<p>
  I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with
  the chainsaw.
</p>
```

### 詳細な連絡先のマークアップ

```html
<address>
  <p>
    Chris Mills<br />
    Manchester<br />
    The Grim North<br />
    UK
  </p>

  <ul>
    <li>Tel: 01234 567 890</li>
    <li>Email: me@grim-north.co.uk</li>
  </ul>
</address>
```

### コンピュータのコードを表現する．

htmlを使用して，コンピュータのコードをマークアップするために利用可能な要素がいくつかある．

- `<code>`: コンピュータのコードの一般的な部分をマークアップ.
- `<pre>`: 空白を保持する場合（一般的にはコードブロック）  
  テキストの中でインデントや余分な空白を使用すると、ブラウザーはそれを無視するので, レンダリングされたページにはそれが表示されない．しかし, テキストを `<pre></pre>` タグで囲むと, エディターで見たのと同じように空白が表示されるようになる.
- `<var>`: 特に変数名をマークアップするためのもの.
- `<kbd>`: コンピューターに入力されたキーボード（およびその他の種類の）入力をマークアップするためのもの．
- `<samp>`: コンピュータプログラムの出力をマークアップ.

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

Qiitaとかは，これ使ってるのかな??

### 日付と時刻をマークアップ

日付をブラウザなどが認識するための要素．  
日付の書き方は様々なので，以下の要素でマークアップすることができる．

```html
<!-- Standard simple date -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Just year and month -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Just time, hours and minutes -->
<time datetime="19:30">19:30</time>
<!-- You can do seconds and milliseconds too! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Date and time -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Date and time with timezone offset -->
<time datetime="2016-01-20T19:30+01:00">
  7.30pm, 20 January 2016 is 8.30pm in France
</time>
<!-- Calling out a specific week number -->
<time datetime="2016-W04">The fourth week of 2016</time>
```

## 文章とウェブサイトの構造

### 文章の基本構造
