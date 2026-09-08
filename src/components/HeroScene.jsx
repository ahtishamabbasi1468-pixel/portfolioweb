import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Icosahedron, Torus, Octahedron } from '@react-three/drei';

/**
 * Central "developer workspace" token — a glowing rounded panel that stands
 * in for a laptop/monitor, orbited by small tech-tag shapes. Recolored to the
 * obsidian/warm-gold editorial palette to match the rest of the design system.
 */
const WorkspaceCore = () => {
    const group = useRef();
    useFrame((state) => {
        if (!group.current) return;
        const t = state.clock.getElapsedTime();
        group.current.rotation.y = Math.sin(t * 0.25) * 0.12;
        group.current.rotation.x = Math.cos(t * 0.2) * 0.03;
    });

    return (
        <group ref={group}>
            <RoundedBox args={[2.6, 1.6, 0.14]} radius={0.09} smoothness={4}>
                <meshStandardMaterial color="#11110f" metalness={0.55} roughness={0.35} />
            </RoundedBox>
            <RoundedBox args={[2.6, 1.6, 0.02]} radius={0.09} position={[0, 0, 0.09]}>
                <meshStandardMaterial color="#0a0a09" metalness={0.2} roughness={0.6} />
            </RoundedBox>
            <RoundedBox args={[2.85, 0.14, 1.7]} radius={0.07} position={[0, -0.92, 0.65]}>
                <meshStandardMaterial color="#11110f" metalness={0.55} roughness={0.35} />
            </RoundedBox>
        </group>
    );
};

const TECH_SHAPES = [
    { Shape: Icosahedron, pos: [-2.4, 1.3, -0.6], scale: 0.3, args: [1, 0] },
    { Shape: Octahedron, pos: [2.5, 1.0, -0.3], scale: 0.32, args: [1, 0] },
    { Shape: Torus, pos: [-2.6, -1.1, 0.4], scale: 0.28, args: [0.6, 0.22, 12, 24] },
    { Shape: Icosahedron, pos: [2.7, -1.3, 0.2], scale: 0.26, args: [1, 1] },
    { Shape: Octahedron, pos: [0, 2.0, -1.2], scale: 0.24, args: [1, 1] },
    { Shape: Torus, pos: [0, -2.1, -0.8], scale: 0.22, args: [0.55, 0.2, 10, 20] },
];

const OrbitingTech = () => {
    return (
        <>
            {TECH_SHAPES.map(({ Shape, pos, scale, args }, i) => (
                <Float key={i} speed={1.3 + i * 0.12} rotationIntensity={1} floatIntensity={1.3}>
                    <Shape args={args} position={pos} scale={scale}>
                        <meshStandardMaterial
                            color="#c8a96b"
                            emissive="#e0c080"
                            emissiveIntensity={0.45}
                            roughness={0.3}
                            metalness={0.4}
                        />
                    </Shape>
                </Float>
            ))}
        </>
    );
};

const ParallaxRig = ({ children }) => {
    const group = useRef();
    useFrame((state) => {
        if (!group.current) return;
        const { pointer } = state;
        group.current.rotation.y += (pointer.x * 0.12 - group.current.rotation.y) * 0.04;
        group.current.rotation.x += (-pointer.y * 0.07 - group.current.rotation.x) * 0.04;
    });
    return <group ref={group}>{children}</group>;
};

const SceneLights = () => (
    <>
        <ambientLight intensity={0.7} color="#f3ebdd" />
        <pointLight position={[4, 4, 4]} intensity={45} color="#e0c080" />
        <pointLight position={[-4, -3, 2]} intensity={25} color="#c8a96b" />
        <directionalLight position={[0, 5, 5]} intensity={0.4} />
    </>
);

const HeroScene = ({ reduced = false }) => {
    const dpr = useMemo(() => (reduced ? [1, 1] : [1, 1.6]), [reduced]);

    return (
        <Canvas
            dpr={dpr}
            camera={{ position: [0, 0, 6], fov: 42 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            style={{ width: '100%', height: '100%' }}
        >
            <Suspense fallback={null}>
                <SceneLights />
                <ParallaxRig>
                    <WorkspaceCore />
                    {!reduced && <OrbitingTech />}
                </ParallaxRig>
            </Suspense>
        </Canvas>
    );
};

export default HeroScene;
