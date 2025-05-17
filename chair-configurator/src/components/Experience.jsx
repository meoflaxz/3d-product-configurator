import {
    MeshReflectorMaterial,
    PresentationControls,
    Stage,
} from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { useRef, useEffect, Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Experience = () => {
    const gltf = useLoader(GLTFLoader, "./models/chair.gltf");
    const modelRef = useRef();

    useEffect(() => {
        if (modelRef.current) {
            const box = new THREE.Box3().setFromObject(modelRef.current);
            const yOffset = box.min.y; // push the bottom to y = 0
            modelRef.current.position.y -= yOffset;
        }
    }, [gltf]);

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
                <Suspense fallback={null}>
                    <primitive object={gltf.scene} ref={modelRef} />
                </Suspense>
            </Stage>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
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
