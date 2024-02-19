# ThreeJS 入門

## OVERVIEW

<!--toc:start-->

- [ThreeJS 入門](#threejs-入門)
  - [OVERVIEW](#overview)
  - [基礎知識](#基礎知識)
    - [レンダラー](#レンダラー)
    - [シーン](#シーン)
    - [マテリアル](#マテリアル)
    - [光源](#光源)
      - [AmbientLight クラス](#ambientlight-クラス)
      - [DirectionalLight クラス](#directionallight-クラス)
      - [HemisphereLight クラス](#hemispherelight-クラス)
      - [PointLight クラス](#pointlight-クラス)
      - [SpotLight クラス](#spotlight-クラス)
    - [Material](#material)
      - [MeshBasicMaterial クラス](#meshbasicmaterial-クラス)
      - [MeshNormalMaterial クラス](#meshnormalmaterial-クラス)
      - [MeshLambertMaterial クラス](#meshlambertmaterial-クラス)
      - [MeshPhongMaterial クラス](#meshphongmaterial-クラス)
      - [MeshToonMaterial クラス](#meshtoonmaterial-クラス)
      - [MeshStandardMaterial クラス](#meshstandardmaterial-クラス)
    - [Raycast](#raycast)
  - [基本構造](#基本構造)
  <!--toc:end-->

## 基礎知識

### レンダラー

レンダリングとは，3D空間に存在するオブジェクトを2D画像に変換することであり，その処理を行うのがレンダラーである．

<img src="https://cdn-ak.f.st-hatena.com/images/fotolife/o/optim-tech/20230719/20230719102200.png" width="500">

### シーン

シーンとは，3D空間に存在するオブジェクトを配置するための箱のようなものである．

### マテリアル

マテリアルとは，オブジェクトの見た目を決めるためのものである．
質感や色などを指定することができる．

### 光源

#### AmbientLight クラス

環境光を表すクラス．３D空間全体を均一に照らす．一律に明るくしたい時に重宝される．
このライトのクラスのみでは，陰影や影がつかないので他のライトと併用して使う．

```js
// 環境光源を作成
// new THREE.AmbientLight(色, 光の強さ)
const light = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(light);
```

<img src="https://ics.media/_assets/tutorial-three/light_ambient__1440.png" width="500">

#### DirectionalLight クラス

特定の方向に放射される光．光源は無限に離れているものとして，そこから発生する光線は全て平行になる．わかりやすく言うと，太陽光のような光源である．

```js
// 平行光源を作成
// new THREE.DirectionalLight(色, 光の強さ)
const light = new THREE.DirectionalLight(0xffffff, 1);
scene.add(light);
```

<img src="https://ics.media/_assets/tutorial-three/light_directional__1440.png" width="500">

#### HemisphereLight クラス

AmbientLightクラスに似ているが，上からの光の色と下からの光の色に分けることができる．
屋外での光の見え方に近くなる．

```js
// 半球光源を作成
// new THREE.HemisphereLight(空の色, 地の色, 光の強さ)
const light = new THREE.HemisphereLight(0x888888, 0x0000ff, 1.0);
scene.add(light);
```

<img src="https://ics.media/_assets/tutorial-three/light_hemisphere__1440.png" width="500">

#### PointLight クラス

単一点からあらゆる方向に放射される光源．電球のような光源である．

```js
// 点光源を作成
// new THREE.PointLight(色, 光の強さ, 距離, 光の減衰率)
const light = new THREE.PointLight(0xffffff, 2, 50, 1.0);
scene.add(light);
```

<img src="https://ics.media/_assets/tutorial-three/light_point__1440.png" width="500">

#### SpotLight クラス

特定の方向に放射される光源．電球のような光源である．

```js
// スポットライトを作成
// new THREE.SpotLight(色, 光の強さ, 距離, 光の減衰率, 角度, パワー)
const light = new THREE.SpotLight(0xffffff, 2, 50, 1.0, 0, 0);
scene.add(light);
```

<img src="https://ics.media/_assets/tutorial-three/light_spot__1440.png" width="500">

### Material

#### MeshBasicMaterial クラス

マテリアルの一種．オブジェクトの見た目を指定するためのもの．  
このマテリアルを使うと，オブジェクトの見た目を一色にすることができる．

```js
// ドーナツを作成
const geometry = new THREE.TorusGeometry(300, 100, 64, 100);
// マテリアルを作成
const material = new THREE.MeshBasicMaterial({ color: 0x6699ff });
// メッシュを作成
const mesh = new THREE.Mesh(geometry, material);
// 3D空間にメッシュを追
scene.add(mesh);
```

<img src="https://ics.media/_assets/tutorial-three/material_variation_basic.png" width="500">

#### MeshNormalMaterial クラス

ノーマルカラーをRGBで可視化するマテリアル．　　
ライティングを必要しないとため，手動に動作確認する時に役立つ．

```js
// ドーナツを作成
const geometry = new THREE.TorusGeometry(300, 100, 64, 100);
// マテリアルを作成
const material = new THREE.MeshNormalMaterial({ color: 0x6699ff });
// メッシュを作成
const mesh = new THREE.Mesh(geometry, material);
// 3D空間にメッシュを追
scene.add(mesh);
```

#### MeshLambertMaterial クラス

光沢感ないマットな質感を表現するマテリアル．ライトを当てると，陰影がつく．

```js
// ドーナツを作成
const geometry = new THREE.TorusGeometry(300, 100, 64, 100);
// マテリアルを作成
const material = new THREE.MeshLambertMaterial({ color: 0x6699ff });
// メッシュを作成
const mesh = new THREE.Mesh(geometry, material);
// 3D空間にメッシュを追加
scene.add(mesh);
```

#### MeshPhongMaterial クラス

光沢感のある質感を表現するマテリアル．ライトを当てると，陰影がつく．

```js
// ドーナツを作成
const geometry = new THREE.TorusGeometry(300, 100, 64, 100);
// マテリアルを作成
const material = new THREE.MeshPhongMaterial({ color: 0x6699ff });
// メッシュを作成
const mesh = new THREE.Mesh(geometry, material);
// 3D空間にメッシュを追加
scene.add(mesh);
```

#### MeshToonMaterial クラス

アニメのような，トゥーンシェーディングを表現するマテリアル．ライトを当てると，陰影がつく．

```js
// ドーナツを作成
const geometry = new THREE.TorusGeometry(300, 100, 64, 100);
// マテリアルを作成
const material = new THREE.MeshToonMaterial({ color: 0x6699ff });
// メッシュを作成
const mesh = new THREE.Mesh(geometry, material);
// 3D空間にメッシュを追加
scene.add(mesh);
```

#### MeshStandardMaterial クラス

金属のような質感を表現するマテリアル．ライトを当てると，陰影がつく．

```js
// ドーナツを作成
const geometry = new THREE.TorusGeometry(300, 100, 64, 100);
// マテリアルを作成
const material = new THREE.MeshStandardMaterial({
  color: 0x6699ff,
  roughness: 0.5,
});
// メッシュを作成
const mesh = new THREE.Mesh(geometry, material);
// 3D空間にメッシュを追加
scene.add(mesh);
```

### Raycast

raycastとは，光線を発射してその光線が当たったオブジェクトを取得することである．
当たり判定などの処理に利用される．

## 基本構造

- THREE.Scene クラス
  3D空間を作成するためのクラス．３Dオブジェクトはシーンにadd()メソッドを利用して追加することができる．

- THREE.PerspectiveCamera クラス
  3D空間を撮影するためのカメラ．視点を制御するのに仕様する．3D空間のどの視点で撮影しているのかの情報が必要になる．

- THREE.WebGLRenderer クラス
  3D空間をレンダリングするためのクラス．レンダリングとは，Three.jsで計算した3Dオブジェクトを画面に表示することである．  
  Three.jsでは，requestAnimationFrame()メソッドを利用して，ブラウザの更新タイミングに合わせてレンダリングを行う．

