"use client";
import { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const PaperAirplaneAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const colors = useMemo(() => {
    if (theme === 'dark') {
      return {
        primary: new THREE.Color('hsl(275, 90%, 55%)'),
        accent: new THREE.Color('hsl(275, 90%, 65%)'),
        secondary: new THREE.Color('hsl(240, 3.7%, 15.9%)'),
      };
    } else {
      return {
        primary: new THREE.Color('hsl(275, 100%, 25%)'),
        accent: new THREE.Color('hsl(274, 100%, 50%)'),
        secondary: new THREE.Color('hsl(210, 40%, 96.1%)'),
      };
    }
  }, [theme]);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mountRef.current.appendChild(renderer.domElement);

    const airplaneShape = new THREE.Shape();
    airplaneShape.moveTo(0, 1);
    airplaneShape.lineTo(0.5, -1);
    airplaneShape.lineTo(0, -0.5);
    airplaneShape.lineTo(-0.5, -1);
    airplaneShape.lineTo(0, 1);
    const airplaneGeometry = new THREE.ShapeGeometry(airplaneShape);

    const numAirplanes = 100;
    const airplanes = new THREE.Group();

    for (let i = 0; i < numAirplanes; i++) {
      const color = [colors.primary, colors.accent, colors.secondary][Math.floor(Math.random() * 3)];
      const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
      const airplane = new THREE.Mesh(airplaneGeometry, material);
      airplane.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      airplane.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      airplane.scale.set(0.1, 0.1, 0.1);
      (airplane as any).velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      );
      airplanes.add(airplane);
    }
    scene.add(airplanes);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      airplanes.children.forEach(child => {
        const airplane = child as THREE.Mesh & { velocity: THREE.Vector3 };
        airplane.position.add(airplane.velocity);
        airplane.rotation.x += airplane.velocity.x * 0.5;
        airplane.rotation.y += airplane.velocity.y * 0.5;
        airplane.rotation.z += airplane.velocity.z * 0.5;

        if (airplane.position.x > 10 || airplane.position.x < -10) airplane.velocity.x *= -1;
        if (airplane.position.y > 10 || airplane.position.y < -10) airplane.velocity.y *= -1;
        if (airplane.position.z > 10 || airplane.position.z < -10) airplane.velocity.z *= -1;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      airplaneGeometry.dispose();
    };
  }, [colors]);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

export default PaperAirplaneAnimation;
