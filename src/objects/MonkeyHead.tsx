
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function MonkeyHead() {
    /*@ts-ignore*/
    const { nodes, materials, scene } = useGLTF('/scene-baked.glb');
    const ref = useRef<THREE.Object3D>();
    const initialZ = useRef(0);

    useEffect(() => {
        if (ref.current) {
            // Store the initial Y position of the object
            initialZ.current = ref.current.position.y;
        }
    }, []);

    useFrame((state, delta) => {

        if (ref.current) {
            ref.current.rotation.z += delta
            // Calculate the floating effect
            const time = state.clock.getElapsedTime();
            ref.current.position.y = initialZ.current + Math.sin(time) * 0.1; // Adjust 0.5 to control the amplitude of the floating
        }

    });

    return <primitive object={nodes.Circle001} ref={ref} />;
}