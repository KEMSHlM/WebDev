# React

## OVERVIEW

<!--toc:start-->

- [React](#react)
  - [OVERVIEW](#overview)
  <!--toc:end-->

## Reactとは？

## Reactの構成

以下は，HTML．

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
```

以下は，App.js.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

このように，rootタグの間にアプリケーションが差し込まれるイメージ．
