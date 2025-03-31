import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect } from "react";
import * as THREE from "three";

const Model = ({ position }) => {
  const gltf = useLoader(GLTFLoader, "/house.glb");
 
  const maxDimension = 2 
  useEffect(() => {
    if (gltf && gltf.scene) {
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const size = new THREE.Vector3();
      box.getSize(size);
      console.log("Model Dimensions:", size);

      const targetMaxDimension = Math.max(size.x, size.y, size.z);
      const scale = maxDimension / targetMaxDimension;
      // Apply the scale to the model
      gltf.scene.scale.set(scale, scale, scale);
    }
  }, [gltf]);

  
 
  // const box = new THREE.Box3().setFromObject(gltf.scene);
  // const targetSize = new THREE.Vector3();
  // box.getSize(targetSize);
  // const targetMaxDimension = Math.max(targetSize.x, targetSize.y, targetSize.z);
  // const scale = (maxDimension) / targetMaxDimension;
  return (
    <>
      <Suspense fallback={null}>
        <primitive position={position} object={gltf.scene}  />
      </Suspense>
    </>
  );
};

export default Model;