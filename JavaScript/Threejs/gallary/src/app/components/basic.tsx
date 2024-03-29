`use client`;

import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { OrbitControls, useHelper } from "@react-three/drei";
import React, { MutableRefObject, useRef } from "react";

import * as THREE from "three";

const Basic = () => {
  const directionalLight = useRef<THREE.DirectionalLight>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  // React Three Fiberのヘルパーでhookだろうなこの書き方は
  useHelper(
    directionalLight as MutableRefObject<THREE.DirectionalLight>,
    THREE.DirectionalLightHelper,
    1,
    "red",
  );

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    if (boxRef.current) {
      boxRef.current.position.x = Math.sin(time) + 1.5;
      boxRef.current.rotation.y += delta;
    }
  });

  return (
    <>
      {/* コントロール */}
      <OrbitControls />

      {/* パフォーマンスモニター */}
      <Perf position="top-left" />

      {/* 背景色 */}
      <color args={["ivory"]} attach="background" />

      {/* 環境光 */}
      <ambientLight intensity={0.5} />

      {/* 直接光 */}
      <directionalLight
        castShadow
        ref={directionalLight}
        position={[1, 2, 3]}
        intensity={0.5}
        shadow-mapSize={[1024, 1024]}
      />

      <group position={[0, -1, 0]}>
        {/* 球体 */}
        <mesh castShadow position={[-1, 0.6, 0]} scale={0.6}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* 箱 */}
        <mesh castShadow position={[1, 0.5, 0]} ref={boxRef}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>

        {/* 平面 */}
        <mesh receiveShadow rotation-x={-Math.PI * 0.5} scale={10}>
          <planeGeometry />
          <meshStandardMaterial color="lightseagreen" />
        </mesh>
      </group>
    </>
  );
};

export default Basic;
