"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const About3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!mountRef.current || !resolvedTheme) return;

    const currentMount = mountRef.current;
    
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(0.8, 0.25, 100, 16);

    const color = 0xff0000;

    const material = new THREE.MeshStandardMaterial({
      color: color,
      wireframe: true,
      roughness: 0.5,
      metalness: 0.5,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 2);
    scene.add(hemisphereLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
        const bounds = currentMount.getBoundingClientRect();
        mouseX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
        mouseY = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
    }
    window.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mesh.rotation.x = .1 * elapsedTime;
      mesh.rotation.y = .2 * elapsedTime;

      camera.position.x += (mouseX * 0.2 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 0.2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

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
      window.removeEventListener('mousemove', onMouseMove);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme]);

  return <div ref={mountRef} className="absolute inset-0 z-0 h-full w-full" />;
};

export default About3D;
