"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const PaperAirplaneAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!mountRef.current || !resolvedTheme) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const airplaneCount = 30;
    
    // Paper Airplane Geometry
    const airplaneGeometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
        // fuselage
        0, 0, 3,
        0, 0, -1,
        -0.5, 0, -1,

        0, 0, 3,
        0, 0, -1,
        0.5, 0, -1,

        // wings
        0, 0, 0,
        -4, 1, -2,
        4, 1, -2,
    ]);

    const indices = [
        0, 1, 2,
        3, 5, 4,
        6, 7, 8,
    ];
    airplaneGeometry.setIndex(indices);
    airplaneGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    airplaneGeometry.computeVertexNormals();

    const airplaneMaterial = new THREE.MeshStandardMaterial({
        color: 0x9400D3,
        side: THREE.DoubleSide,
        roughness: 0.6,
        metalness: 0.2,
        emissive: 0x9400D3,
        emissiveIntensity: 0.5,
    });
    
    const instancedMesh = new THREE.InstancedMesh(airplaneGeometry, airplaneMaterial, airplaneCount);
    scene.add(instancedMesh);

    const dummy = new THREE.Object3D();
    const airplanesData = Array.from({ length: airplaneCount }, () => ({
        x: Math.random() * 100 - 50,
        y: Math.random() * 50 - 25,
        z: Math.random() * 100 - 50,
        speed: Math.random() * 0.1 + 0.05,
        angle: Math.random() * Math.PI * 2,
    }));


    const clock = new THREE.Clock();

    const animate = () => {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();

        airplanesData.forEach((plane, i) => {
            plane.angle += 0.005;
            plane.x += Math.cos(plane.angle) * plane.speed + plane.speed;
            plane.y += Math.sin(delta * 0.5) * 0.1;
            
            if (plane.x > 50) {
                plane.x = -50;
                plane.y = Math.random() * 50 - 25;
            }

            dummy.position.set(plane.x, plane.y, plane.z);
            dummy.rotation.set(0, -plane.angle, Math.sin(plane.angle) * 0.2);
            dummy.updateMatrix();
            instancedMesh.setMatrixAt(i, dummy.matrix);
        });

        instancedMesh.instanceMatrix.needsUpdate = true;
        
        renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
        if (currentMount) {
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        }
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        if (currentMount) {
            currentMount.removeChild(renderer.domElement);
        }
    };
  }, [resolvedTheme]);

  return <div ref={mountRef} className="absolute inset-0 z-0 h-full w-full opacity-20" />;
};

export default PaperAirplaneAnimation;
