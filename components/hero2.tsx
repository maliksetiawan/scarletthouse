import { SetStateAction, useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
import fatur from '@/public/images/28.jpg'


export default function Hero2() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [epi, reja, aca, dido, jo, cceu, ujan, malik, fadli, rara, cepi, raga, calvin, mardi,];
  // raga, calvin, mardi, candra, padang, frans, ncekdua, bikul, tansa, bo, tama, aping, nceksatu, ayong, wilbert, fatur];

  const [clickedImageIndex, setClickedImageIndex] = useState(null);

  const openModal = (imageIndex: SetStateAction<number>) => {
    setCurrentImageIndex(imageIndex);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const showNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const showPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentImageIndex(images.length - 1);
    }
  };

  // const maxLength = 10; // Panjang maksimum teks yang ingin ditampilkan

  // const shortenDescription = (description) => {
  //   if (description.length > maxLength) {
  //     // const keyword = 'sesuatu'; // Kata kunci yang menjadi penanda pemotongan
  //     const index = description.indexOf();
  //     if (index !== -1) {
  //       const shortenedDescription = description.substring(0, maxLength) + '...';
  //       return shortenedDescription;
  //     }
  //   }
  //   return description;
  // };
  const members = [


    {
      name: "SELVYANA LIE",
      nick: "xMademoiselle",
      zodiac: "Scorpio",
      location: "Jakarta",
      description: "OWNER, LEADER, KETUA, RI 1 ☀️",
      image: epi
    },
    {
      name: "Reza Pahlevi",
      nick: "reenan",
      zodiac: "Aries",
      location: "Bogor",
      description: "STAFF CB, IDOL KITA SEMUWAH 🐊",
      image: reja
    },
    {
      name: "Annasthasya Puteri",
      nick: "imScarlett , imLudovs-",
      zodiac: "Libra",
      location: "Jakarta",
      description: "STAFF EVENT ONLINE ATAU OFFLINE 🐍 ",
      image: aca
    },
    {
      name: "Nadhila Amanda Putri",
      nick: "imTYREX",
      zodiac: "Leo",
      location: "Depok",
      description: "BENDAHARA 🦖 ",
      image: dido
    },
    {
      name: "Jarot",
      nick: "jarotharsa",
      zodiac: "Cancer",
      location: "Batam",
      description: "PENASEHAT UMUM 🐻 ",
      image: jo
    },
    {
      name: "Fathya L Azzahra",
      nick: "imeiska",
      zodiac: "Libra",
      location: "Bogor",
      description: "SEKRETARIS JENDRAL 🌸 ",
      image: cceu
    },
    {
      name: "Fauzan Suganda",
      nick: "rainyboi",
      zodiac: "Aquarius",
      location: "Bogor",
      description: "TESTER, IDOL KITA SEMUWAH 🌧️",
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
      name: "Fadli ",
      nick: "xMademoiselle",
      zodiac: "Scorpio",
      location: "Jakarta",
      description: "OWNER, LEADER, KETUA, RI 1 ☀️",
      image: fadli
    },
    {
      name: "Rara",
      nick: "reenan",
      zodiac: "Aries",
      location: "Bogor",
      description: "STAFF CB, IDOL KITA SEMUWAH 🐊",
      image: rara
    },
    {
      name: "Chevi Frans",
      nick: "reenan",
      zodiac: "Aries",
      location: "Bogor",
      description: "STAFF CB, IDOL KITA SEMUWAH 🐊",
      image: cepi
    },
    {
      name: "Raga Alfajri",
      nick: "imScarlett , imLudovs-",
      zodiac: "Libra",
      location: "Jakarta",
      description: "STAFF EVENT ONLINE ATAU OFFLINE 🐍 ",
      image: raga
    },
    {
      name: "Calvin Jeremia",
      nick: "imTYREX",
      zodiac: "Leo",
      location: "Depok",
      description: "BENDAHARA 🦖 ",
      image: calvin
    },
    {
      name: "Mardi Refandi",
      nick: "jarotharsa",
      zodiac: "Cancer",
      location: "Batam",
      description: "PENASEHAT UMUM 🐻 ",
      image: mardi
    },
    // {
    //   name: "Raden Candra",
    //   nick: "imeiska",
    //   zodiac: "Libra",
    //   location: "Bogor",
    //   description: "SEKRETARIS JENDRAL 🌸 ",
    //   image: candra
    // },
    // {
    //   name: "Reza Adiatama",
    //   nick: "rainyboi",
    //   zodiac: "Aquarius",
    //   location: "Bogor",
    //   description: "TESTER, IDOL KITA SEMUWAH 🌧️",
    //   image: padang
    // },
    // {
    //   name: "Fransesco",
    //   nick: "imalik",
    //   zodiac: "Aries",
    //   location: "Jakarta",
    //   description: ".....",
    //   image: frans
    // },
    // {
    //   name: "Arief Rachman",
    //   nick: "xMademoiselle",
    //   zodiac: "Scorpio",
    //   location: "Jakarta",
    //   description: "OWNER, LEADER, KETUA, RI 1 ☀️",
    //   image: ncekdua
    // },
    // {
    //   name: "Bagags Bikul",
    //   nick: "reenan",
    //   zodiac: "Aries",
    //   location: "Bogor",
    //   description: "STAFF CB, IDOL KITA SEMUWAH 🐊",
    //   image: bikul
    // },
    // {
    //   name: "Tansa",
    //   nick: "imScarlett , imLudovs-",
    //   zodiac: "Libra",
    //   location: "Jakarta",
    //   description: "STAFF EVENT ONLINE ATAU OFFLINE 🐍 ",
    //   image: tansa
    // },
    // {
    //   name: "Teguh Guhribo",
    //   nick: "imTYREX",
    //   zodiac: "Leo",
    //   location: "Depok",
    //   description: "BENDAHARA 🦖 ",
    //   image: bo
    // },
    // {
    //   name: "Fajar Adityatama",
    //   nick: "jarotharsa",
    //   zodiac: "Cancer",
    //   location: "Batam",
    //   description: "PENASEHAT UMUM 🐻 ",
    //   image: tama
    // },
    // {
    //   name: "Mario Alvind",
    //   nick: "imeiska",
    //   zodiac: "Libra",
    //   location: "Bogor",
    //   description: "SEKRETARIS JENDRAL 🌸 ",
    //   image: aping
    // },
    // {
    //   name: "Rizky Astrian",
    //   nick: "rainyboi",
    //   zodiac: "Aquarius",
    //   location: "Bogor",
    //   description: "TESTER, IDOL KITA SEMUWAH 🌧️",
    //   image: nceksatu
    // },
    // {
    //   name: "Pranadita Artawan",
    //   nick: "imalik",
    //   zodiac: "Aries",
    //   location: "Jakarta",
    //   description: ".....",
    //   image: ayong
    // },
    // {
    //   name: "Wilbert Kurniawan",
    //   nick: "xMademoiselle",
    //   zodiac: "Scorpio",
    //   location: "Jakarta",
    //   description: "OWNER, LEADER, KETUA, RI 1 ☀️",
    //   image: wilbert
    // },
    // {
    //   name: "Faturochman",
    //   nick: "reenan",
    //   zodiac: "Aries",
    //   location: "Bogor",
    //   description: "STAFF CB, IDOL KITA SEMUWAH 🐊",
    //   image: fatur
    // },

  ];
  // const handleImageClick = (index: number) => {
  //   if (index >= 0 && index < members.length) { // Memastikan index valid
  //     setClickedImageIndex(index);
  //     openModal();
  //   }
  // };


  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
              PART OF SCARLETT HOUSE
            </h1>
            {/* <p className="text-xl text-gray-600">Relive our memorable moments</p> */}
          </div>
          <Carousel
            showThumbs={true}
            showStatus={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            selectedItem={currentImageIndex}
            onChange={setCurrentImageIndex}
          >
            {images.map((image, index) => (
              <div key={index} className="cursor-pointer flex items-center justify-center mb-4">
                <img
                  src={image.src}
                  alt={`Kenangan ${index + 1}`}
                  className="object-cover mr-4"
                  style={{ width: '500px', height: '400px' }} // Sesuaikan ukuran dengan kebutuhan Anda
                  onClick={() => openModal(index)} // Tambahkan onClick handler untuk membuka modal
                />
                <div>
                  <h3 className="text-lg font-semibold">{members[currentImageIndex]?.name}</h3>
                  <p className="text-gray-500" style={{ color: 'white' }}>{members[currentImageIndex]?.nick}</p>
                  <p className="text-gray-500" style={{ color: 'white' }}>{members[currentImageIndex]?.zodiac}</p>
                  <p className="text-gray-500" style={{ color: 'white' }}>{members[currentImageIndex]?.location}</p>
                  <p className="text-gray-500" style={{ color: 'white' }}>{members[currentImageIndex]?.description}</p>

                </div>
              </div>
            ))}




          </Carousel>
          <div className="flex justify-center mt-4">
            <button onClick={showPreviousImage} className="mr-2">Previous</button>
            <button onClick={showNextImage}>Next</button>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Gambar Kenangan"
          className="modal"
          overlayClassName="overlay"
        >
          <button onClick={closeModal} className="absolute top-4 right-4 bg-gray-300 px-2 py-1 rounded-md">
            Close
          </button>
          {currentImageIndex !== null && <img src={images[currentImageIndex].src} alt="Gambar Kenangan" className="w-full h-auto" />}
        </Modal>
      </div>
    </section>
  );
}
