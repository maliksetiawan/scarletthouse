'use client'; // Membuat komponen ini berjalan di lingkungan Client Component

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import epi from '@/public/images/2.jpg';
import aca from '@/public/images/3.jpg';
import dido from '@/public/images/4.jpg';
import malik from '@/public/images/5.jpg';
import jo from '@/public/images/6.jpg';
import reja from '@/public/images/7.jpg';
import ujan from '@/public/images/8.jpg';
import cceu from '@/public/images/9.jpg';
import fadli from '@/public/images/10.jpg';
import rara from '@/public/images/11.jpg';
import cepi from '@/public/images/12.jpg';

const members = [
  { name: "SELVYANA LIE", nick: "xMademoiselle", zodiac: "Scorpio", location: "Jakarta", description: "OWNER, LEADER, KETUA, RI 1 ☀️\nnyawa lu ada 9 kalo berani ngelawan dia", image: epi },
  { name: "Reza Pahlevi", nick: "reenan", zodiac: "Aries", location: "Bogor", description: "STAFF CB, IDOL KITA SEMUWAH 🐊\nlu orang kalo mau cb, WAJIB lapor ke dia. jgn maen cb sembarangan ae loe.", image: reja },
  { name: "Annasthasya Puteri", nick: "imScarlett , imLudovs-", zodiac: "Libra", location: "Jakarta", description: "STAFF EVENT ONLINE ATAU OFFLINE 🐍 tukang ngide. kalo ada event atau kumpul2 dadakan pokonya kerjaan dia dah.", image: aca },
  { name: "Nadhila Amanda Putri", nick: "imTYREX", zodiac: "Leo", location: "Depok", description: "BENDAHARA 🦖 kalo ada gath, event, atau nabung2 carinya dia ya. mana tau nanti kita next gath nya umroh ramean.", image: dido },
  { name: "Jarot", nick: "jarotharsa", zodiac: "Cancer", location: "Batam", description: "PENASEHAT UMUM 🐻 harus pada dengerin ye kalo dia ngang ngong ngang ngong fa fi fu was wes wos.", image: jo },
  { name: "Fathya L Azzahra", nick: "imeiska", zodiac: "Libra", location: "Bogor", description: "SEKRETARIS JENDRAL 🌸 kalo ada discuss atau lagi briefing sesuatu, dia nih yg suka nyatet. tapi nyambi jadi tatib juga, bae2 dah lu ye.", image: cceu },
  { name: "Fauzan Suganda", nick: "rainyboi", zodiac: "Aquarius", location: "Bogor", description: "TESTER, IDOL KITA SEMUWAH 🌧️lu orang kalo mau open test, carinya ujan aja y", image: ujan },
  { name: "Malik", nick: "imalik", zodiac: "Aries", location: "Jakarta", description: ".....", image: malik },
  { name: "rara", nick: "jiniret", zodiac: "gatau", location: "depok", description: ".....", image: rara },
  { name: "Chevi Frans", nick: "irlChv347", zodiac: "Aquarius", location: "Bandung", description: "STAFF EVENT IN GAME ATAU PUBLIC 🐼orang paling penting kalo event.", image: cepi },
  { name: "Fadli Hermansyah", nick: "myBlackpearl", zodiac: "-", location: "Bandung", description: "Abang CB", image: fadli },
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
                  <p className="text-sm">{member.description}</p>
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
