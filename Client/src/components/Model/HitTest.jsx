
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrModelHit from "./XrModelHit";

const HitTest = () => {
    return (
        <>
            <ARButton
                sessionInit={{
                    requiredFeatures: ["hit-test"],
                }}
            />
            <div className="w-screen h-screen">
                <Canvas style={{ backgroundColor: '#31363F'}}>
                    <XR>
                        <XrModelHit />
                    </XR>
                </Canvas>
            </div>
        </>
    );
};

export default HitTest;
