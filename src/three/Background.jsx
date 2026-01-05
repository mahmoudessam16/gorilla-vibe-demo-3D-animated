import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

// Generate Star Field
function StarField({ count = 50000 }) {
  const points = useRef();
  const starTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }, []);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 400 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.005;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.0}
        sizeAttenuation
        transparent
        opacity={0.4}
        map={starTexture}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Earth() {
  const earthRef = useRef();
  const cloudRef = useRef();
  const textures = useTexture({
    map: "/earth.jpg",
    lightMap: "/earthlights.jpg",
    cloudMap: "/earthcloud.jpg",
  });

  useFrame(() => {
    if (earthRef.current) earthRef.current.rotation.y += 0.001;
    if (cloudRef.current) cloudRef.current.rotation.y += 0.0015;
  });

  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={textures.map}
          emissiveMap={textures.lightMap}
          emissive={new THREE.Color(0xffff88)}
          emissiveIntensity={2}
          roughness={0.7}
        />
      </mesh>
      <mesh ref={cloudRef}>
        <sphereGeometry args={[2.03, 64, 64]} />
        <meshStandardMaterial
          map={textures.cloudMap}
          transparent
          opacity={0.2}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Moon() {
  const moonRef = useRef();
  const textures = useTexture({
    map: "/moon.jpg",
    bumpMap: "/moonbump.jpg",
  });

  useFrame(({ clock }) => {
    if (moonRef.current) {
      const t = clock.getElapsedTime() * 0.1;
      moonRef.current.position.x = Math.sin(t) * 9;
      moonRef.current.position.z = Math.cos(t) * 9;
      moonRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        map={textures.map}
        bumpMap={textures.bumpMap}
        bumpScale={0.05}
      />
    </mesh>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const rigRef = useRef({
    initialPos: new THREE.Vector3(6, 4, 20),
    stablePos: new THREE.Vector3(0, 5, 12),
    currentSettle: 0,
    lookAt: new THREE.Vector3(0, 0, 0),
  });

  useFrame((state, delta) => {
    // Kinetic Damping Logic (The "Camera Update" feel)
    const targetSettle = window.heroCameraSettle || 0;

    // Lerp the internal settle value towards the scroll target
    // 0.05 is the damping factor (lower = heavier/smoother)
    rigRef.current.currentSettle = THREE.MathUtils.lerp(
      rigRef.current.currentSettle,
      targetSettle,
      0.03
    );

    // Apply position based on the smoothed settle value
    camera.position.lerpVectors(
      rigRef.current.initialPos,
      rigRef.current.stablePos,
      rigRef.current.currentSettle
    );

    // Fluid idle drift (weighted by sin/cos)
    const time = state.clock.getElapsedTime();
    camera.position.x += Math.sin(time * 0.4) * 0.005;
    camera.position.y += Math.cos(time * 0.3) * 0.005;

    camera.lookAt(rigRef.current.lookAt);
  });

  return null;
}

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 bg-black overflow-hidden pointer-events-none">
      <Canvas camera={{ fov: 45 }} gl={{ antialias: true, alpha: false }}>
        <Suspense fallback={null}>
          <StarField count={20000} />
          <group>
            <Earth />
            <Moon />
          </group>
          <CameraRig />
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[10, 5, 10]}
            intensity={3}
            color="#fff5e6"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
