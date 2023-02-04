export default function WhatWeDo() {
  return (
    <section className='flex min-h-screen items-center justify-center bg-primary sm:h-screen'>
      <div className='container py-8 px-4 text-white sm:px-0 md:grid md:grid-cols-3'>
        <div className='mb-20 md:mb-0'>
          <p className='text-center text-5xl font-medium md:text-left md:text-6xl'>
            What we do
          </p>
        </div>
        <div className='gap-x-6 gap-y-10 text-lg sm:grid sm:grid-cols-2 sm:grid-rows-2 md:col-span-2 md:text-xl'>
          <div className='mb-10 sm:mb-0'>
            <p className='mb-6 text-2xl font-medium md:text-3xl'>
              Brand Strategy
            </p>
            <p>
              My posters capture attention with bold graphics, punchy text and
              on-brand visuals.
            </p>
          </div>
          <div className='mb-10 sm:mb-0'>
            <p className='mb-6 text-2xl font-medium md:text-3xl'>Web Design</p>
            <p>
              Make them see! I create digital smorgasbords of color and images
              made larger than life.
            </p>
          </div>
          <div className='mb-10 sm:mb-0'>
            <p className='mb-6 text-2xl font-medium md:text-3xl'>
              UX/UI Design
            </p>
            <p>
              My mini murals turn blank spaces into visual messages that speak
              volumes.
            </p>
          </div>
          <div>
            <p className='mb-6 text-2xl font-medium md:text-3xl'>Custom</p>
            <p>
              The medium is the message. Capture it all through inventive type.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
