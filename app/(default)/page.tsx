// page.tsx
"use client";

import { useEffect } from 'react';
import { metadata } from './metadata';

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  useEffect(() => {
    const audio = document.getElementById('background-audio') as HTMLAudioElement;

    // Coba memutar audio saat halaman dimuat
    const playAudio = () => {
      audio.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    };

    // Coba memutar audio setelah interaksi pengguna
    document.addEventListener('click', playAudio);

    // Membersihkan event listener saat komponen dilepas
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <>
      <Hero />
      <Features />
      {/* <Zigzag /> */}
      <Testimonials />
      {/* <Newsletter /> */}
      <audio id="background-audio" autoPlay loop>
        <source src="/videos/cocomelon.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
