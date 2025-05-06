import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model/Model";

// Thumbnail component renders a small 3D view of the model.
const Thumbnail = ({ modelUrl }) => {
    return (
        <Canvas
            style={{ width: "100px", height: "100px" }}
            orthographic
            camera={{ zoom: 50, position: [0, 0, 100] }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight intensity={0.5} position={[0, 0, 5]} />
            <Model position={[0, -0.5, 0]} modelUrl={modelUrl} />
        </Canvas>
    );
};

const models = [
    { name: "House", url: "/house.glb" },
    { name: "forest", url: "/forest_house.glb" },
    // { name: 'Tree', url: '/tree.glb' },
];

function Card({ onModelSelect }) {
    return (
        <div
            className="flex flex-row gap-4 p-4 overflow-x-auto bg-slate-500"
        >
            <div>
                <h2 className="text-lg font-bold mb-2">Select a Model</h2>
                <p className="text-sm text-gray-600">Click on a model to select it.</p>
            </div>
            {models.map((model, index) => (
                <div
                    key={index}
                    onClick={() => onModelSelect(model.url)}
                    className="border border-gray-300 rounded-lg p-4 cursor-pointer text-center w-[120px]"
                >
                    <div className="w-[100px] h-[100px] mx-auto mb-2">
                        <Thumbnail modelUrl={model.url} />
                    </div>
                    <div>{model.name}</div>
                </div>
            ))}
        </div>
    );
}

export default Card;
