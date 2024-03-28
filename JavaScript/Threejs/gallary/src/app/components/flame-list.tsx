"use client";

import { imagesType } from "./types";
import { easing } from "maath";
import * as THREE from "three";

import FrameItem from "./frame-item";
import { useEffect, useMemo, useRef, useState } from "react";
import { GOLDENRATIO } from "./utils";
import { useFrame } from "@react-three/fiber";

const FrameList = ({ images }: { images: imagesType[] }) => {
  const frameRef = useRef<THREE.Group>(null);
  const clickRef: any = useRef(null);
  const [select, setSelect] = useState("/");
  const targetPosition = useMemo(() => new THREE.Vector3(), []);
  const targetQuaternion = useMemo(() => new THREE.Quaternion(), []);

  useEffect(() => {
    if (frameRef.current) {
      clickRef.current = frameRef.current.getObjectByName(select);

      if (clickRef.current) {
        // フレームが存在する場合は，その位置にカメラを移動
        const parent = clickRef.current.parent;
        parent.updateMatrixWorld();
        parent.localToWorld(targetPosition.set(0, GOLDENRATIO / 2, 2.2));
        parent.getWorldQuaternion(targetQuaternion);
      } else {
        // フレームが存在する場合は， デフォルトの位置に戻す．
        targetPosition.set(0, 0, 4);
        targetQuaternion.identity();
      }
    }
  }, [select, targetPosition, targetQuaternion]);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, targetPosition, 0.4, delta);
    easing.dampQ(state.camera.quaternion, targetQuaternion, 0.4, delta);
  });

  return (
    <group
      ref={frameRef}
      onClick={(e) => {
        e.stopPropagation();
        setSelect(e.object.name);
      }}
      onPointerMissed={() => setSelect("/")}
    >
      {images.map((data, index) => (
        <FrameItem key={index} data={data} />
      ))}
    </group>
  );
};

export default FrameList;
