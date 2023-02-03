export default function WhatWeDo() {
  return (
    <section className='flex h-screen items-center justify-center bg-primary'>
      <div className='container grid grid-cols-3 text-white'>
        <div>
          <p className='text-6xl font-medium'>What we do</p>
        </div>
        <div className='col-span-2 grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-10 text-xl'>
          <div>
            <p className='mb-6 text-3xl font-medium'>Brand Strategy</p>
            <p>
              My posters capture attention with bold graphics, punchy text and
              on-brand visuals.
            </p>
          </div>
          <div>
            <p className='mb-6 text-3xl font-medium'>Web Design</p>
            <p>
              Make them see! I create digital smorgasbords of color and images
              made larger than life.
            </p>
          </div>
          <div>
            <p className='mb-6 text-3xl font-medium'>UX/UI Design</p>
            <p>
              My mini murals turn blank spaces into visual messages that speak
              volumes.
            </p>
          </div>
          <div>
            <p className='mb-6 text-3xl font-medium'>Custom</p>
            <p>
              The medium is the message. Capture it all through inventive type.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
