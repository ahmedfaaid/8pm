export default function Contact() {
  return (
    <section className='relative flex h-screen items-center justify-center bg-[url("/images/manolo-chretien-RpC-9e0ORNM-unsplash.jpg")] bg-cover bg-center bg-blend-darken'>
      <div className='absolute inset-0 bg-primary opacity-60' />
      <div className='z-10 flex w-72 flex-col items-center justify-center sm:h-44 sm:w-[36rem] sm:flex-row'>
        <div className='flex h-full w-full flex-col justify-center bg-white p-8 text-primary sm:w-1/2'>
          <p className='mb-4 text-3xl font-medium md:text-4xl'>Contact</p>
          <a
            href='mailto:info@weare8pm.com'
            className='text-lg hover:text-zinc-700 md:text-xl'
          >
            INFO@WEARE8PM.COM
          </a>
        </div>
        <div className='flex h-full w-full flex-col justify-center bg-primary p-8 text-lg text-white sm:w-1/2 md:text-xl'>
          <p className='mb-4 text-3xl font-medium md:text-4xl'>Follow</p>
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
