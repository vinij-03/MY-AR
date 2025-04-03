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
            style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem",
                overflowX: "auto",
                background: "#f5f5f5",
            }}
        >
            {models.map((model, index) => (
                <div
                    key={index}
                    onClick={() => onModelSelect(model.url)}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "1rem",
                        cursor: "pointer",
                        textAlign: "center",
                        width: "120px",
                    }}
                >
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            margin: "0 auto 0.5rem",
                        }}
                    >
                        <Thumbnail modelUrl={model.url} />
                    </div>
                    <div>{model.name}</div>
                </div>
            ))}
        </div>
    );
}

export default Card;
