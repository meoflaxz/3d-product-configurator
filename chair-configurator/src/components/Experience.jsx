import {
    MeshReflectorMaterial,
    PresentationControls,
    Stage,
} from "@react-three/drei";

import { Suspense } from "react";
import Chair from "./Chair";
const Experience = () => {


    return (
        <PresentationControls
            speed={1.5}
            global
            zoom={0.7}
            polar={[-0.1, Math.PI / 4]} // limit rotation
        >
            <Stage
                environment="city"
                intensity={0.6}
                contactShadow={false}
                adjustCamera={false}
            >
                    <Chair />
            </Stage>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
                <planeGeometry args={[170, 170]} />
                <MeshReflectorMaterial
                    blur={[300, 300]}
                    color="#101010"
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    metalness={0.5}
                />
            </mesh>
        </PresentationControls>
    );
};

export default Experience;
