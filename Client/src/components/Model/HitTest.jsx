
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrModelHit from "./XrModelHit";
import Card from "../Card";
const HitTest = () => {
    return (
        
            
        <div className="w-screen h-screen   bg-slate-500">
                <ARButton
                    sessionInit={{
                        requiredFeatures: ["hit-test"],
                    }}
                />
            <Canvas style={{ backgroundColor: '#31363F'}}>
                    <XR>
                        <XrModelHit />
                    </XR>
                </Canvas>
                <Card />
            </div>

    );
};

export default HitTest;
