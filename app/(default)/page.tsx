// page.tsx
"use client";

import { useEffect, useRef } from 'react';
import Hero from '@/components/hero';
import Zigzag from '@/components/zigzag';
import Testimonials from '@/components/testimonials';

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const updateCanvasSize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight; // Update canvas height to the entire document height
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    updateCanvasSize(); // Set initial canvas size

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
    const mouse = { x: 0, y: 0 };

    // Buat partikel
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
      });
    }

    // Fungsi menggambar partikel
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();
      });
    };

    // Update posisi partikel
    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce efek di tepi layar
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Interaksi dengan mouse
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          particle.x += dx / distance;
          particle.y += dy / distance;
        }
      });
    };

    // Animasi loop
    const animate = () => {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animate);
    };

    // Update posisi mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    // Update ukuran canvas saat ukuran window berubah
    window.addEventListener('resize', updateCanvasSize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <>
      {/* Canvas untuk efek mouse */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      {/* Konten */}
      <Hero />
      <Zigzag />
      <Testimonials />
    </>
  );
};

export default Home;
