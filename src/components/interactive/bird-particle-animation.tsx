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
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Paper Bird Geometry
    const birdGeometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      // Body
      0, 0, 0,   // 0: Center
      -2, 0.5, 0,  // 1: Left wing tip
      2, 0.5, 0,   // 2: Right wing tip
      0, 0, 3,     // 3: Tail
      0, 0.5, -1,  // 4: Head

      // Wings
      -2, 0.5, 0,  // 1
      0, 0, 0,   // 0
      0, 0.5, -1,  // 4

      2, 0.5, 0,   // 2
      0, 0, 0,   // 0
      0, 0.5, -1,  // 4

      // Tail
      -1, 0, 2,    // 5
      1, 0, 2,     // 6
      0, 0, 3,     // 3
    ]);

    const indices = [
        // Body bottom
        1, 3, 0,
        0, 3, 2,
        // Head
        1, 0, 4,
        2, 0, 4,
    ];

    birdGeometry.setIndex(indices);
    birdGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    birdGeometry.computeVertexNormals();


    const birdMaterial = new THREE.MeshStandardMaterial({
        color: 0x9400D3, 
        side: THREE.DoubleSide,
        roughness: 0.6,
        metalness: 0.2,
    });

    const paperBird = new THREE.Mesh(birdGeometry, birdMaterial);
    scene.add(paperBird);


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

        // Flapping animation
        const positionAttribute = paperBird.geometry.getAttribute('position') as THREE.BufferAttribute;
        const wingFlap = Math.sin(elapsedTime * 8) * 0.5;
        positionAttribute.setY(1, 0.5 + wingFlap); // left wing
        positionAttribute.setY(2, 0.5 - wingFlap); // right wing
        positionAttribute.needsUpdate = true;
        
        // Flight path
        paperBird.position.x = Math.cos(elapsedTime * 0.5) * 8;
        paperBird.position.z = Math.sin(elapsedTime * 0.5) * 8;
        paperBird.position.y = Math.sin(elapsedTime * 0.8) * 1;
        
        // Rotation to follow path
        paperBird.rotation.y = -elapsedTime * 0.5 - Math.PI / 2;
        paperBird.rotation.z = Math.sin(elapsedTime * 0.8) * 0.2;


        camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 5 - camera.position.y) * 0.05;
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
