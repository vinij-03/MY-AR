import { useState } from "react";
import HitTest from "../components/Model/HitTest";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

function AppPage() {
  const [modelUrl, setModelUrl] = useState(null);

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar  />
      {/* HitTest with AR and 3D Model */}
      <HitTest modelUrl={modelUrl} />

      {/* Card section at the bottom */}
      <div className="w-full">
        <Card onModelSelect={setModelUrl} />
      </div>
    </div>
  );
}

export default AppPage;
