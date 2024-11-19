


// Data JSON yang telah dibuat sebelumnya
'use client'; // Membuat komponen ini berjalan di lingkungan Client Component

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import della from '@/public/images/40.jpg'
import yoyo from '@/public/images/41.jpg'
import dira from '@/public/images/42.jpg'
import atik from '@/public/images/43.jpg'
import rahia from '@/public/images/44.jpg'
import dita from '@/public/images/45.jpg'
import nurul from '@/public/images/46.jpg'
import denis from '@/public/images/47.jpg'
import salma from '@/public/images/48.jpg'
import anggi from '@/public/images/49.jpg'
import putri from '@/public/images/50.jpg'
import gita from '@/public/images/51.jpg'
import tasya from '@/public/images/52.jpg'



  const members = [
    {
      name: "Nafrah Adella",
      nick: "deepend",
      zodiac: "Gemini",
      location: "Jakarta",
     
      image: della
    },
    {
      name: "Yoana Dwi Haryanti",
      nick: "yoane",
      zodiac: "Gemini",
      location: "Jakarta",
     
      image: yoyo
    },
    {
      name: "Diraa",
      nick: "Diraa",
      zodiac: "Capricorn",
      location: "Jakarta Barat",
     
      image: dira
    },
    {
      name: "Atik",
      nick: "Xyla~",
      zodiac: "Aries",
      location: "Jakarta",
      
      image: atik
    },
    {
      name: "Rania Zahratu Syarifah",
      nick: "imRania",
      zodiac: "Capricorn",
      location: "Bekasi",
      
      image: rahia
    },
    {
      name: "Dita Agestia",
      nick: "Candytta",
      zodiac: "Virgo",
      location: "Bali",
  
      image: dita
    },
    {
      name: "Nurul Fatimah",
      nick: "NurulbPF",
      zodiac: "Scorpio",
      location: "Jakbar",
      
      image: nurul
    },
    {
      name: "Denise",
      nick: " -frost",
      zodiac: "Libra",
      location: "Jakarta",
   
      image: denis
    },
    {
      name: "Salma Luthfiyah",
      nick: "xBLUE-UG",
      zodiac: "Aries",
      location: "Jakarta",
      image: salma
    },
    {
      name: "Anggitha",
      nick: "-",
      zodiac: "Gemini",
      location: "Bali",
      image: anggi
    },
    {
      name: "Putri",
      nick: "-",
      zodiac: "Scorpio",
      location: "Jakarta",
      image: putri
    },
    {
      name: "Gita Larasati",
      nick: "gitaalrst, Geeta",
      zodiac: "Taurus",
      location: "Palangkaraya",
      image: gita
    },
    {
      name: "Tasya",
      nick: "babyfriday / babyfridayy",
      zodiac: "Aquarius",
      location: "Jakarta",
      image: tasya
    },
   
  ];


const Features: React.FC = () => {
  const router = useRouter();
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
    <div style={{ position: 'relative', overflow: 'hidden' }}>
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
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">SCARLETT RANGERS</h2>
              <p className="text-xl text-gray-400">pelaku utama scarlett house</p>
            </div>
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 items-start md:max-w-2xl lg:max-w-none">
              {members.map((member, index) => (
                <div key={index} className="border p-4 rounded-lg">
                  <Image src={member.image} alt={member.name} className="rounded-lg" />
                  <h4 className="text-lg font-bold mt-4">{member.name}</h4>
                  <p className="text-sm">{member.nick}</p>
                  <p className="text-sm">{member.zodiac}</p>
                  <p className="text-sm">{member.location}</p>
                  {/* <p className="text-sm">{member.description}</p> */}
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button
                onClick={() => router.push('/')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

