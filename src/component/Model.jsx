import * as THREE from "three";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
    PerspectiveCamera,
    OrbitControls,
    useGLTF,
    useProgress,
    Html,
} from "@react-three/drei";

const Model = ({ orbitRef, cameraRef, modelRef }) => {
    const LoadPage = () => {
        return <div className="loading">Loading ...</div>;
    };

    const Loader = () => {
        const { progress } = useProgress();
        console.log(progress);
        return (
            <Html
                center
                style={{
                    color: "blue",
                    width: "200px",
                    height: "200px",
                    position: "absolute",
                    top: "-50%",
                    textAlign: "center",
                }}
            >
                <div style={{ width: progress + "%", background: "red" }}>
                    {progress ? parseInt(progress) : 0} % loaded
                </div>
            </Html>
        );
    };

    const LoadModel = ({ modelPath }) => {
        const gltf = useGLTF(modelPath);
        gltf.scene.traverse((node) => {
            if (node.isMesh) {
                node.castShadow = true;
            }
        });

        return (
            <primitive
                object={gltf.scene}
                dispose={null}
                scale={0.01}
                position={[-1, 0, 2.5]}
            />
        );
    };

    const Light = () => {
        return (
            <>
                <ambientLight color="#FFFFFF" intensity={2.5} />
                <directionalLight
                    color="#F7A950"
                    intensity={5}
                    position={[3, 8, 5]}
                    castShadow
                />
            </>
        );
    };
    const Plane = () => {
        return (
            <mesh scale={[12, 0.2, 12]} position={[0, -0.1, -1]} receiveShadow>
                <boxBufferGeometry />
                <meshPhongMaterial color="#2B3646" transparent />
            </mesh>
        );
    };
    return (
        <>
            <Suspense fallback={<LoadPage />}>
                <Canvas
                    colorManagement={false}
                    pixelRatio={window.devicePixelRatio}
                    shadows="true"
                    shadowMap
                    onCreated={(canvasCtx) => {
                        canvasCtx.gl.physicallyCorrectLights = true;
                        canvasCtx.gl.toneMapping = THREE.CineonToneMapping;
                        canvasCtx.gl.toneMappingExposure = 0.8;
                    }}
                >
                    <PerspectiveCamera
                        makeDefault
                        position={[10, 6, 20]}
                        fov={75}
                        zoom={1}
                        ref={cameraRef}
                    />
                    {/*maxPolarAngle={Math.PI * 0.5}*/}
                    <OrbitControls
                        target={[0, 3, 0]}
                        enableDamping={true}
                        enablePan={true}
                        enableZoom={true}
                        maxDistance={15}
                        minDistance={10}
                        autoRotate={false}
                        autoRotateSpeed={2}
                        ref={orbitRef}
                    />
                    <color attach="background" args={["#D8C9AD"]} />
                    <Light />
                    <Plane />
                    <mesh ref={modelRef}>
                        <LoadModel modelPath={"/model/scene.gltf"} />
                    </mesh>
                </Canvas>
            </Suspense>
        </>
    );
};

export default Model;
