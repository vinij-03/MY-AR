import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrModelHit from "./XrModelHit";

const HitTest = ({ modelUrl }) => {
    return (
        <div className="w-screen h-screen bg-slate-500 flex flex-col">
            {/* AR Button placed outside the canvas */}
            <div className="p-4 flex justify-center">
                <ARButton
                    sessionInit={{
                        requiredFeatures: ["hit-test"],
                    }}
                />
            </div>

            {/* Canvas section taking half the screen */}
            <div className="w-full" style={{ height: "50vh" }}>
                <Canvas style={{ backgroundColor: "#31363F", height: "100%" }}>
                    <XR>
                        <XrModelHit modelUrl={modelUrl} />
                    </XR>
                </Canvas>
            </div>
        </div>
    );
};

export default HitTest;
