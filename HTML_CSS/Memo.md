# HTML 入門
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
    <meta charset="UTF-8">
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
<html lang="ja">
</html>
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
        <a href="https://www.mozilla.org/ja/" title="Mozillaのホームページ">Mozilla</a>
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
