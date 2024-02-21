import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Textures
 */
// const image = new Image();
// const texture = new THREE.Texture(image);
// texture.colorSpace = THREE.SRGBColorSpace;
//
// image.onload = () => {
//   // GPU でロードされる．
//   texture.needsUpdate = true;
// };
// image.src = "/textures/door/color.jpg";

const loadingManager = new THREE.LoadingManager();

// loadを監視する．
loadingManager.onStart = () => {
  console.log("onStart!");
};
loadingManager.onProgress = () => {
  console.log("onProgress!");
};
loadingManager.onError = () => {
  console.log("onError!");
};

const textureLoader = new THREE.TextureLoader(loadingManager);
const colorTexture = textureLoader.load("/textures/door/color.jpg");
colorTexture.colorSpace = THREE.SRGBColorSpace;
const highCheckedTexture = textureLoader.load(
  "/textures/checkerboard-1024x1024.png",
);
highCheckedTexture.colorSpace = THREE.SRGBColorSpace;
const lowCheckedTexture = textureLoader.load("/textures/checkerboard-8x8.png");
lowCheckedTexture.colorSpace = THREE.SRGBColorSpace;
const minecraftTexture = textureLoader.load("/textures/minecraft.png");
minecraftTexture.colorSpace = THREE.SRGBColorSpace;

// texture.repeat.x = 2;
// texture.repeat.y = 3;
// texture.wrapS = THREE.MirroredRepeatWrapping;
// texture.wrapT = THREE.MirroredRepeatWrapping;
//
// texture.offset.x = 0.5;
// texture.offset.y = 0.5;

// texture.rotation = Math.PI * 0.25;
// texture.center.x = 0.5;
// texture.center.y = 0.5;

// colorTexture.minFilter = THREE.NearestFilter;
lowCheckedTexture.generateMipmaps = false;
lowCheckedTexture.magFilter = THREE.NearestFilter;
minecraftTexture.magFilter = THREE.NearestFilter;

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
console.log(geometry.attributes);
const material = new THREE.MeshBasicMaterial({ map: minecraftTexture });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 1;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

