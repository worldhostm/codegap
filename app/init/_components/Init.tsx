'use client'

import Button from '@/app/system/_components/Button';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

export default function Init() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const router = useRouter();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler with ripple effect
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Create ripple particles
      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 1,
          size: Math.random() * 3 + 1,
          hue: Math.random() * 60 + 15 // Orange to yellow
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create fire particles
    const createFireParticle = () => {
      const x = Math.random() * canvas.width;
      const y = canvas.height + 10;
      particlesRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: -(Math.random() * 3 + 2),
        life: 1,
        maxLife: 1,
        size: Math.random() * 4 + 2,
        hue: Math.random() * 60 + 15 // Orange to yellow range
      });
    };

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create new fire particles
      for (let i = 0; i < 3; i++) {
        createFireParticle();
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.01;

        if (particle.life <= 0) return false;

        const alpha = particle.life;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );

        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 60%, ${alpha})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 30%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className='fixed w-full h-full flex items-center justify-center bg-black p-20'>
      <canvas
        ref={canvasRef}
        className='absolute inset-0'
        style={{ pointerEvents: 'none' }}
      />
      <div
        className='flex items-center justify-center w-[100%] h-[100%] p-100'
      >
        <div style={{
            color: 'white',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '100px',
            padding: '100px'
        }}
        className='text-8xl whitespace-nowrap w-full font-extrabold p-100 text-white'
        >
            CODE GAP
        <Button
        label='둘러보기'
        variant={'danger'}
        className='w-[30%] h-[100%] rounded-full text-3xl ml-px'
        onClick={()=>router.push('/system')}
        ></Button>
        </div>
      </div>
    </div>
  );

}
