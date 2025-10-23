"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BirdParticleAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Particles
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const birdGeometry = new THREE.BufferGeometry();
    const purpleColor = new THREE.Color(0x9400D3);

    // Create a shape that resembles a bird
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        const phi = Math.acos(-1 + (2 * i) / particleCount);
        const theta = Math.sqrt(particleCount * Math.PI) * phi;

        const x = 10 * Math.cos(theta) * Math.sin(phi);
        const y = 6 * Math.sin(theta) * Math.sin(phi); // Flatten the sphere
        const z = 10 * Math.cos(phi);

        // Stretch to form wing-like shapes
        const wingStretch = Math.abs(Math.sin(phi * 2));
        positions[i3] = x * (1 + wingStretch * 1.5);
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;
    }
    
    birdGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
        color: purpleColor,
        size: 0.08,
        transparent: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });

    const particleSystem = new THREE.Points(birdGeometry, particleMaterial);
    scene.add(particleSystem);

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
        const bounds = currentMount.getBoundingClientRect();
        mouseX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        mouseY = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
    }
    window.addEventListener('mousemove', onMouseMove);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        particleSystem.rotation.y = elapsedTime * 0.2;
        
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
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
        window.removeEventListener('mousemove', onMouseMove);
        if (currentMount) {
            currentMount.removeChild(renderer.domElement);
        }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 h-full w-full opacity-20" />;
};

export default BirdParticleAnimation;
