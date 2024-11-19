

// Data JSON yang telah dibuat sebelumnya
'use client'; // Membuat komponen ini berjalan di lingkungan Client Component

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import raga from '@/public/images/13.jpg'
import calvin from '@/public/images/14.jpg'
import mardi from '@/public/images/15.jpg'
import candra from '@/public/images/16.jpg'
import padang from '@/public/images/17.jpg'
import frans from '@/public/images/18.jpg'
import ncekdua from '@/public/images/19.jpg'
import bikul from '@/public/images/20.jpg'
import tansa from '@/public/images/21.jpg'
import bo from '@/public/images/22.jpg'
import tama from '@/public/images/23.jpg'
import aping from '@/public/images/24.jpg'
import nceksatu from '@/public/images/25.jpg'
import ayong from '@/public/images/26.jpg'
import wilbert from '@/public/images/27.jpg'
import fatur2 from '@/public/images/28.jpg'
import kris from '@/public/images/30.jpg'
import fabow from '@/public/images/29.jpg'
import mario from '@/public/images/32.jpg'
import adhi from '@/public/images/33.jpg'
import irawan from '@/public/images/31.jpg'
import bopak from '@/public/images/34.jpg'

const members = [
  {
    name: "Raga Alfajri",
    nick: "racylions",
    zodiac: "Libra",
    location: "Bogor",
   
    image: raga
  },
  {
    name: "Calvin Jeremia",
    nick: "clxyton",
    zodiac: "Scorpio",
    location: "Jakarta",
   
    image: calvin
  },
  {
    name: "Mardi Refandi",
    nick: "-",
    zodiac: "Sagitarius",
    location: "Jakarta Barat",
   
    image: mardi
  },
  {
    name: "Raden Candra",
    nick: "xNORTHBEAST-cL",
    zodiac: "Virgo",
    location: "Jakarta",
    
    image: candra
  },
  {
    name: "Reza Adiatama",
    nick: "Russorebel",
    zodiac: "Capricorn",
    location: "Bekasi",
    
    image: padang
  },
  {
    name: "Fransesco",
    nick: "Babyseijuro",
    zodiac: "Virgo",
    location: "Jakarta",

    image: frans
  },
  {
    name: "Arief Rachman",
    nick: "Harrenz",
    zodiac: "Pisces",
    location: "Bekasi",
    
    image: ncekdua
  },
  {
    name: "Bagags Bikul",
    nick: "imBikulth",
    zodiac: "Sagitarius",
    location: "Jakarta",
 
    image: bikul
  },
  {
    name: "Tansa",
    nick: "noblueberries",
    zodiac: "Gemini",
    location: "Bekasi",
    image: tansa
  },
  {
    name: "Teguh Guhribo",
    nick: "YAPJOR",
    zodiac: "Aquarius",
    location: "Jakarta",
    image: bo
  },
  {
    name: "Fajar Adityatama",
    nick: "Taaamsky",
    zodiac: "Taurusboy",
    location: "Jakarta",
    image: tama
  },
  {
    name: "Mario Alvind",
    nick: "imMonroe",
    zodiac: "Aries",
    location: "Bogor",
    image: aping
  },
  {
    name: "Rizky Astrian",
    nick: "rainyboi",
    zodiac: "Aquarius",
    location: "Bogor",
    image: nceksatu
  },
  {
    name: "Pranadita Artawan",
    nick: "YANTO",
    zodiac: "Gemini",
    location: "Bali",
    image: ayong
  },
  {
    name: "Wilbert Kurniawan",
    nick: "myKinglion",
    zodiac: "Aries",
    location: "bogor",
    image: wilbert
  },
  {
    name: "Faturochman",
    nick: "sheo-FLz",
    zodiac: "Aquarium",
    location: "Bogor",
    image: fatur2
  },{
    name: "kris",
    nick: "kriss",
    zodiac: "-",
    location: "Jakarta",
    
    image: kris
  },{
    name: "Fabow",
    nick: "Equanimity-cL",
    zodiac: "-",
    location: "Jakarta",
    
    image: fabow
  },
  {
    name: "Mario Pranoto",
    nick: "BabyXing-FLz",
    zodiac: "Aries",
    location: "Jakarta",
    
    image: mario
  },
  {
    name: "Irawan",
    nick: "Iriwinnn",
    zodiac: "Leo",
    location: "Bali",
    
    image: irawan
  },
  {
    name: "Adhi Pratama",
    nick: "dhxps",
    zodiac: "Capricorn",
    location: "Bekasi - Semarang",
    
    image: adhi
  },
  {
    name: "Mohammad Riduwan",
    nick: "-",
    zodiac: "-",
    location: "Jakarta",
    
    image: bopak
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

