import * as THREE from "three";

const width = 960;
const height = 720;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas"),
});
renderer.setSize(width, height);

// シーンを作成．
const scene = new THREE.Scene();

// カメラを作成
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, +1000);

// 球体を作成
const geometry = new THREE.SphereGeometry(300, 30, 30);
// テクスチャのローダー, 0xFF0000は赤色
const loader = new THREE.TextureLoader();
// 月のテクスチャを読み込む
const texture = loader.load("./texture/moonmap4k.jpg");
const material = new THREE.MeshStandardMaterial({ 
    map:  texture 
});

// 省略すると
// const material = new THREE.MeshStandardMaterial({
//   map: new THREE.TextureLoader().load("./texture/moonmap4k.jpg")
// });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 平行光源
// 光源の色を指定
// 暖色にするには，0xFF0000のように指定する．
// 寒色にするには，0x0000FFのように指定する．
const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

let rot = 0;
let mouseX = 0;

document.addEventListener("mousemove", (event) => {
    mouseX = event.pageX;
});

tick();

// カメラ側を回転させる．
// マウスの位置によって，カメラの位置を変える．
function tick() {
    // マウスのX座標がステージの幅のどの位置にあるかを調べて，それを画面幅で正規化する．
    const targetRot = (mouseX / window.innerWidth) * 360;
    // イージングの公式を用いて，なめらかにする．
    rot += (targetRot - rot) * 0.02;
    
    const radian = rot * Math.PI / 180;

    camera.position.x = 1000 * Math.sin(radian);
    camera.position.z = 1000 * Math.cos(radian);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    renderer.render(scene, camera);
    
    requestAnimationFrame(tick);
}

// カメラ側を回転させる．
// function tick() {
//     rot += 0.5; 
//     const radian = rot * Math.PI / 180;
// 
//     camera.position.x = 1000 * Math.sin(radian);
//     camera.position.z = 1000 * Math.cos(radian);
// 
//     camera.lookAt(new THREE.Vector3(0, 0, 0));
//     renderer.render(scene, camera);
//     
//     requestAnimationFrame(tick);
// }