

import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ position }) => {
  const gltf = useLoader(GLTFLoader, "/house.glb");
  return (
    <>
          <Suspense fallback={null}>
              <primitive position={position} object={gltf.scene} scale={[5, 5, 5]} />
          </Suspense>
    </>
  );
};

export default Model;