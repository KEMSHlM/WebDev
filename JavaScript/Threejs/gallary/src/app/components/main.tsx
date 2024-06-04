"use client";

import { StrictMode } from "react";
import { Canvas } from "@react-three/fiber";
import Gallery from "./gallery";

import * as THREE from "three";
import Basic from "./basic";

// Main
const Main = () => {
  return (
    <div className="w-full h-screen">
      <StrictMode>
        <Canvas
          // フラットシェーディングを有効にする
          flat
          // 影の計算を有効にする
          shadows
          // WebGLの設定
          gl={{
            antialias: true, // エッジをスムーズにするかどうか
            toneMapping: THREE.ACESFilmicToneMapping, // 映画のようなトーンマッピング
            outputColorSpace: THREE.SRGBColorSpace, // あってるかわからんけど
          }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 100,
            position: [0, 0, 4],
          }}
        >
          <Basic />
          {/* <Gallery /> */}
        </Canvas>
      </StrictMode>
    </div>
  );
};

export default Main;
