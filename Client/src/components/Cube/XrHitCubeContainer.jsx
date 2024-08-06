import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import HitTest from "./";

const XrHitCubeContainer = () => {
    return (
        <>
            <ARButton
                sessionInit={{
                    requiredFeatures: ["hit-test"],
                }}
            />
            <Canvas>
                <XR>
                    <HitTest />
                </XR>
            </Canvas>
        </>
    );
};

export default XrHitCubeContainer;