// ES6のモジュール機能により，three.jsをインポート
import * as THREE from "three";

// サイズを指定
// サイズ指定しないと標準は小さい．
const width = 960;
const height = 720;

// レンダラーを作成
// このレンダラーHTMLの<canvas>要素を使う
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

// シーンを作成
// シーンとは，3D空間のこと．
const scene = new THREE.Scene();

// カメラを作成
// new THREE.PerspectiveCamera(視野角, アスペクト比, near, far);
// 人間の目の見え方を模倣するようにつくられている．
const camera = new THREE.PerspectiveCamera(90, width / height);
// カメラの位置を決定(↓x, →y, ◉z)
camera.position.set(0, 0, +1000);

// 箱を作成
const geometry = new THREE.BoxGeometry(400, 400, 400);
// マテリアルとは，箱の材質のこと．
const material = new THREE.MeshNormalMaterial();
const box = new THREE.Mesh(geometry, material);
scene.add(box);

tick();

// 毎フレーム時に実行されるループイベントです
function tick() {
    box.rotation.y += 0.01;
    renderer.render(scene, camera); // レンダリング

    // 再起呼び出し
    // これが再起の書き方か．
    requestAnimationFrame(tick);
}
