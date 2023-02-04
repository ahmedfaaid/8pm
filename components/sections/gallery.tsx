import Image from 'next/image';
import { gallery } from '../../lib/gallery';

export default function Gallery() {
  return (
    <section className='flex min-h-screen items-center justify-center bg-primary'>
      <div className='container grid grid-cols-2 grid-rows-4 gap-x-2 gap-y-4 px-4 sm:px-0 md:grid-cols-4 md:grid-rows-2'>
        {gallery.map((image) => (
          <div
            key={image.id}
            className='relative h-36 overflow-hidden sm:h-64 md:h-44 lg:h-72'
          >
            <Image
              src={image.image}
              alt='8PM image gallery'
              width={250}
              height={250}
              className='object-cover object-center'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
