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
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    
    const particleCount = 200;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
    }
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        color: 0x9400D3, // Ungu
        size: 0.8,
        sizeAttenuation: true
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x9400D3, // Ungu
        opacity: 0.2,
        transparent: true
    });

    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 3);
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    
    const linesMesh = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(linesMesh);

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
      
      particleSystem.rotation.y = elapsedTime * 0.1;

      const posAttribute = particles.getAttribute('position') as THREE.BufferAttribute;
      const linePosAttribute = linesGeometry.getAttribute('position') as THREE.BufferAttribute;
      let vertexCount = 0;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posAttribute.getX(i) - posAttribute.getX(j);
          const dy = posAttribute.getY(i) - posAttribute.getY(j);
          const dz = posAttribute.getZ(i) - posAttribute.getZ(j);
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (dist < 15) {
            linePosAttribute.setXYZ(vertexCount, posAttribute.getX(i), posAttribute.getY(i), posAttribute.getZ(i));
            vertexCount++;
            linePosAttribute.setXYZ(vertexCount, posAttribute.getX(j), posAttribute.getY(j), posAttribute.getZ(j));
            vertexCount++;
          }
        }
      }
      
      linePosAttribute.needsUpdate = true;
      linesGeometry.setDrawRange(0, vertexCount);

      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
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

  return <div ref={mountRef} className="absolute inset-0 z-0 h-full w-full opacity-30" />;
};

export default About3D;
