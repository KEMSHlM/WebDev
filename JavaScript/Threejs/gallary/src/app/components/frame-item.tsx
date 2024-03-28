"use client";

import * as THREE from "three";
import { imagesType } from "./types";
import { GOLDENRATIO } from "./utils";
import { Decal, useCursor, useTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

const boxGeometry = new THREE.BoxGeometry(1, GOLDENRATIO, 0.05);

const FrameItem = ({ data }: { data: imagesType }) => {
  const frameRef = useRef<THREE.Mesh>(null); // useRefは値が変更されても再レンダリングされない
  const [hover, setHover] = useState(false);
  const texture = useTexture(data.image);
  const spotLightRef = useRef<THREE.SpotLight>(null);

  const aspectRatio = texture.image.width / texture.image.height;
  const scaleY = GOLDENRATIO;
  const scaleX = scaleY * aspectRatio;

  useEffect(() => {
    if (spotLightRef.current && frameRef.current) {
      spotLightRef.current.target = frameRef.current;
    }
  }, [spotLightRef, frameRef]);

  // ホバー時の処理
  useCursor(hover);

  return (
    <group position={new THREE.Vector3(...data.position)}>
      {/* ライト */}
      <spotLight
        ref={spotLightRef}
        castShadow
        color="white"
        intensity={0.6}
        position={[0, 3, 0]}
        angle={Math.PI / 5}
        penumbra={0.7}
      />

      {/* フレーム */}
      <mesh position={[0, 0.8, 0]} geometry={boxGeometry} castShadow>
        <meshStandardMaterial
          color="darkgolderod"
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>

      {/* 絵 */}
      <mesh
        ref={frameRef}
        name={data.id}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={() => setHover(false)}
        geometry={boxGeometry}
        position={[0, 0.8, 0.01]}
        scale={[0.9, 0.94, 0.9]}
        material-roughness={1}
        dispose={null}
      >
        <Decal
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[scaleX, scaleY, 1]}
          map={texture}
        />
      </mesh>
    </group>
  );
};

export default FrameItem;
