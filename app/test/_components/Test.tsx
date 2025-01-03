'use client'
// components/ThreeJSCube.tsx

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSCube: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene, Camera, Renderer 생성
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // FOV
      window.innerWidth / window.innerHeight, // Aspect Ratio
      0.1, // Near Clipping Plane
      1000 // Far Clipping Plane
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 큐브 생성
    const geometry = new THREE.BoxGeometry();

    const edges = new THREE.EdgesGeometry(geometry); // 큐브의 가장자리 생성
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // 테두리 색상
    const wireframe = new THREE.LineSegments(edges, lineMaterial); // 가장자리를 선으로 연결
    scene.add(wireframe);

    // const b_geometry = new THREE.
    const material = new THREE.MeshBasicMaterial({ color: 0x0054FF });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // 애니메이션 루프
    const animate = () => {
      requestAnimationFrame(animate);

    //회전 애니메이션
      cube.rotation.x += 0.05;
    //   cube.rotation.x += 50;
    //   cube.rotation.y += 50;
      cube.rotation.y += 0.05;
      wireframe.rotation.x += 0.05; // 테두리도 동일하게 회전
      wireframe.rotation.y += 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 클린업
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeJSCube;
