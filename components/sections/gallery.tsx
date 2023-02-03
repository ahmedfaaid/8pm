import Image from 'next/image';
import { gallery } from '../../lib/gallery';

export default function Gallery() {
  return (
    <section className='flex h-screen items-center justify-center bg-primary'>
      <div className='container grid grid-cols-4 grid-rows-2 gap-x-2 gap-y-4'>
        {gallery.map((image) => (
          <div key={image.id} className='relative h-72 overflow-hidden'>
            <Image
              src={image.image}
              alt='8PM image gallery'
              width={300}
              height={300}
              className='object-cover object-center'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
