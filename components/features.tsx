import React from 'react';
import epi from '@/public/images/2.jpg'
import aca from '@/public/images/3.jpg'
import dido from '@/public/images/4.jpg'
import malik from '@/public/images/5.jpg'
import jo from '@/public/images/6.jpg'
import reja from '@/public/images/7.jpg'
import ujan from '@/public/images/8.jpg'
import cceu from '@/public/images/9.jpg'
import fadli from '@/public/images/10.jpg'
import rara from '@/public/images/11.jpg'
import cepi from '@/public/images/12.jpg'


import Image from 'next/image';

// Data JSON yang telah dibuat sebelumnya
const members = [
  {
    name: "SELVYANA LIE",
    nick: "xMademoiselle",
    zodiac: "Scorpio",
    location: "Jakarta",
    description: "OWNER, LEADER, KETUA, RI 1 ☀️\nnyawa lu ada 9 kalo berani ngelawan dia",
    image: epi
  },
  {
    name: "Reza Pahlevi",
    nick: "reenan",
    zodiac: "Aries",
    location: "Bogor",
    description: "STAFF CB, IDOL KITA SEMUWAH 🐊\nlu orang kalo mau cb, WAJIB lapor ke dia. jgn maen cb sembarangan ae loe.",
    image: reja
  },
  {
    name: "Annasthasya Puteri",
    nick: "imScarlett , imLudovs-",
    zodiac: "Libra",
    location: "Jakarta",
    description: "STAFF EVENT ONLINE ATAU OFFLINE 🐍 tukang ngide. kalo ada event atau kumpul2 dadakan pokonya kerjaan dia dah.",
    image: aca
  },
  {
    name: "Nadhila Amanda Putri",
    nick: "imTYREX",
    zodiac: "Leo",
    location: "Depok",
    description: "BENDAHARA 🦖 kalo ada gath, event, atau nabung2 carinya dia ya. mana tau nanti kita next gath nya umroh ramean.",
    image: dido
  },
  {
    name: "Jarot",
    nick: "jarotharsa",
    zodiac: "Cancer",
    location: "Batam",
    description: "PENASEHAT UMUM 🐻 harus pada dengerin ye kalo dia ngang ngong ngang ngong fa fi fu was wes wos.",
    image: jo
  },
  {
    name: "Fathya L Azzahra",
    nick: "imeiska",
    zodiac: "Libra",
    location: "Bogor",
    description: "SEKRETARIS JENDRAL 🌸 kalo ada discuss atau lagi briefing sesuatu, dia nih yg suka nyatet. tapi nyambi jadi tatib juga, bae2 dah lu ye.",
    image: cceu
  },
  {
    name: "Fauzan Suganda",
    nick: "rainyboi",
    zodiac: "Aquarius",
    location: "Bogor",
    description: "TESTER, IDOL KITA SEMUWAH 🌧️lu orang kalo mau open test, carinya ujan aja y",
    image: ujan
  },
  {
    name: "Malik",
    nick: "imalik",
    zodiac: "Aries",
    location: "Jakarta",
    description: ".....",
    image: malik
  },
  {
    name: "rara",
    nick: "jiniret",
    zodiac: "gatau",
    location: "depok",
    description: ".....",
    image: rara
  },
  {
    name: "Chevi Frans",
    nick: "irlChv347",
    zodiac: "Aquarius",
    location: "Bandung",
    description: "STAFF EVENT IN GAME ATAU PUBLIC 🐼orang paling penting kalo event.",
    image: cepi
  },

];

const Features: React.FC = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">SCARLETT RANGERS</h2>
            <p className="text-xl text-gray-400">pelaku utama scarlett house</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {/* Konten di sini */}
            {members.map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6 d-flex align-items-stretch" style={{ border: '1px solid whites' }}>
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <div className="member-img">
                    <div className="w-100 h-100 bg-cover bg-center rounded-full" style={{ backgroundImage: `url("${member.image}")` }}></div>
                    <div className="social">
                      {/* Gunakan Image dari Next.js */}
                      <Image src={member.image} alt="Foto" className="w-full h-auto" style={{ objectFit: 'cover' }} />
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <div>
                      <span>Nick: {member.nick}</span>
                    </div>
                    <div>
                      <span>Zodiak: {member.zodiac}</span>
                    </div>
                    <div>
                      <span>Domisili: {member.location}</span>
                    </div>
                    <div>
                      <span>{member.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

