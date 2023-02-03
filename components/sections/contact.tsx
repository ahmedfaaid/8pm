export default function Contact() {
  return (
    <section className='relative flex h-screen items-center justify-center bg-[url("/images/manolo-chretien-RpC-9e0ORNM-unsplash.jpg")] bg-cover bg-center bg-blend-darken'>
      <div className='absolute inset-0 bg-primary opacity-60' />
      <div className='z-10 flex h-44 w-1/2 items-center justify-center'>
        <div className='flex h-full w-1/2 flex-col justify-center bg-white p-8 text-primary'>
          <p className='mb-4 text-4xl font-medium'>Contact</p>
          <a
            href='mailto:info@weare8pm.com'
            className='text-xl hover:text-zinc-700'
          >
            INFO@WEARE8PM.COM
          </a>
        </div>
        <div className='flex h-full w-1/2 flex-col justify-center bg-primary p-8 text-xl text-white'>
          <p className='mb-4 text-4xl font-medium'>Follow</p>
          <a
            href='https://instagram.com'
            target='_blank'
            className='block hover:text-gray-200'
          >
            INSTAGRAM
          </a>
          <a
            href='https://behance.com'
            target='_blank'
            className='block hover:text-gray-200'
          >
            BEHANCE
          </a>
        </div>
      </div>
    </section>
  );
}
