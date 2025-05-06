import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrModelHit from "./XrModelHit";

const HitTest = ({ modelUrl }) => {
    return (
        <div className="w-screen h-screen bg-slate-500 flex flex-col">
            {/* Canvas takes up remaining vertical space */}
            <div className="w-full flex-grow">
                <Canvas style={{ backgroundColor: "#31363F", width: "100%", height: "100%" }}>
                    <XR>
                        <XrModelHit modelUrl={modelUrl} />
                    </XR>
                </Canvas>
            </div>

            {/* AR Button at bottom */}
            <div className="p-4 flex justify-center bg-slate-700">
                <div className="relative w-fit">
                    <ARButton
                        sessionInit={{
                            requiredFeatures: ["hit-test"],
                        }}
                        style={{
                            position: "relative",
                            padding: "10px 20px",
                            fontSize: "1rem",
                            borderRadius: "8px",
                            backgroundColor: "#4F46E5",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default HitTest;
