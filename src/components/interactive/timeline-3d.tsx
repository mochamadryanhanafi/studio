"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const Timeline3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!mountRef.current || !resolvedTheme) return;

    const currentMount = mountRef.current;
    
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    
    const count = 50;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    const color = new THREE.Color(0x9400D3);

    for(let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 20;
        positions[i3 + 1] = (Math.random() - 0.5) * 20;
        positions[i3 + 2] = (Math.random() - 0.5) * 20;
        
        sizes[i] = Math.random() * 1.5 + 0.5;

        color.toArray(colors, i3);
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const material = new THREE.PointsMaterial({
        size: 0.1,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
        const bounds = currentMount.getBoundingClientRect();
        mouseX = (event.clientX - bounds.left) / bounds.width * 2 - 1;
        mouseY = -(event.clientY - bounds.top) / bounds.height * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      points.rotation.y = elapsedTime * 0.1;

      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 5 - camera.position.y) * 0.05;
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

  return <div ref={mountRef} className="absolute inset-0 z-0 h-full w-full opacity-10" />;
};

export default Timeline3D;
