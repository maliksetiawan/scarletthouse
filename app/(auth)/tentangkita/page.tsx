// pages/TentangKita.tsx
import Link from 'next/link';
import Image from 'next/image';
import event1 from '@/public/images/tentangkita/event1.jpeg';
import event2 from '@/public/images/tentangkita/event2.jpeg';
import gath1 from '@/public/images/tentangkita/gath1.jpeg';
import gath2 from '@/public/images/tentangkita/gath2.jpeg';
import gath3 from '@/public/images/tentangkita/gath3.jpeg';
import bultang from '@/public/images/tentangkita/bultang.jpeg';
import nongkrong from '@/public/images/tentangkita/holddtree.jpeg';


export const metadata = {
  title: 'ABOUT - EVENT OTS',
  description: 'Page description',
}

const TentangKita = () => {
  const imageWidth = 700;
  const imageHeight = 500;

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1">Berikut Acara Acara Kita</h1>
              <h1 className="h4">event,gath,carikeringat</h1>
            </div>

            {/* Form */}
          </div>
        </div>
      </section>

      {/* Photo container */}
      <section className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="flex justify-center">
            <Image
              src={event1}
              alt="Event1"
              className="rounded-lg shadow-lg"
              layout="intrinsic"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={bultang}
              alt="Bultang"
              className="rounded-lg shadow-lg"
              layout="intrinsic"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={event2}
              alt="Event2"
              className="rounded-lg shadow-lg"
              layout="intrinsic"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={gath1}
              alt="Gath1"
              className="rounded-lg shadow-lg"
              layout="intrinsic"
              width={imageWidth}
              height={imageHeight}
              objectFit="cover"
            />
          </div>

        </div>
      </section>
    </>
  );
}

export default TentangKita;
