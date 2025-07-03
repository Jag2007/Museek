import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarfieldBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{
          background:
            "radial-gradient(ellipse at bottom, #1a1a2e 0%, #0f0f1f 100%)",
        }}
      >
        <Stars
          radius={100}
          depth={50}
          count={700}
          factor={4}
          saturation={0}
          fade
          speed={12}
        />
      </Canvas>
    </div>
  );
}
