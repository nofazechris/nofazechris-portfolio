import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    mountRef.current.appendChild(renderer.domElement);

    // Create more shapes for better movement
    const geometry1 = new THREE.OctahedronGeometry(0.5, 0);
    const geometry2 = new THREE.TetrahedronGeometry(0.6, 0);
    const geometry3 = new THREE.IcosahedronGeometry(0.4, 0);
    const geometry4 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xffffff, 
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });

    const shapes = [];
    
    // Create 25 shapes for more movement
    for (let i = 0; i < 25; i++) {
      const geom = [geometry1, geometry2, geometry3, geometry4][Math.floor(Math.random() * 4)];
      const mesh = new THREE.Mesh(geom, material.clone());
      
      // Random positions
      mesh.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25 - 10
      );
      
      // Random rotations
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      // Store random velocities for each shape
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.01
        },
        floatSpeed: Math.random() * 0.002 + 0.001,
        floatOffset: Math.random() * Math.PI * 2,
        driftSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01
        }
      };
      
      shapes.push(mesh);
      scene.add(mesh);
    }

    camera.position.z = 8;

    // More dynamic animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      shapes.forEach((shape, i) => {
        // Rotate shapes
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        // Float up and down
        shape.position.y += Math.sin(time + shape.userData.floatOffset) * shape.userData.floatSpeed;
        
        // Drift horizontally
        shape.position.x += shape.userData.driftSpeed.x;
        shape.position.z += shape.userData.driftSpeed.y;
        
        // Wrap around screen edges
        if (shape.position.x > 15) shape.position.x = -15;
        if (shape.position.x < -15) shape.position.x = 15;
        if (shape.position.z > 5) shape.position.z = -20;
        if (shape.position.z < -20) shape.position.z = 5;
        
        // Pulse opacity
        const opacity = 0.2 + Math.sin(time * 0.5 + i) * 0.2;
        shape.material.opacity = Math.max(0.1, Math.min(0.5, opacity));
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      shapes.forEach(shape => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0" />;
}
