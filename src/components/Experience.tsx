import { MeshReflectorMaterial, OrbitControls, Environment } from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { Draum } from "./Draum";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false}/>
      {/* LIGHTS */}
      <Environment preset="sunset" />
      <ambientLight intensity={.2} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        color={"blue"}
      />
      <Draum
        scale={[20, 20, 20]}
        position={[1, -1, -3]}
        rotation-y={0.15 * Math.PI}
      />
    </>
  );
};
