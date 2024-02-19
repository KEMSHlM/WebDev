import * as THREE from "three";

const width = 960;
const height = 720;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas"),
});
renderer.setSize(width, height);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, +1000);

const geometry = new THREE.SphereGeometry(300, 30, 30);
// 0xFF0000は赤色
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

tick();

function tick() {
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
    
    requestAnimationFrame(tick);
}