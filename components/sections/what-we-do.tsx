export default function WhatWeDo() {
  return (
    <section className='flex h-screen items-center justify-center bg-primary'>
      <div className='container grid grid-cols-3 text-white'>
        <div>
          <p className='text-6xl font-medium'>What we do</p>
        </div>
        <div className='col-span-2 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-10 text-xl font-medium'>
          <div>
            <p className='mb-6 text-3xl'>Brand Strategy</p>
            <p>
              My posters capture attention with bold graphics, punchy text and
              on-brand visuals.
            </p>
          </div>
          <div>
            <p className='mb-6 text-3xl'>Web Design</p>
            <p>
              Make them see! I create digital smorgasbords of color and images
              made larger than life.
            </p>
          </div>
          <div>
            <p className='mb-6 text-3xl'>UX/UI Design</p>
            <p>
              My mini murals turn blank spaces into visual messages that speak
              volumes.
            </p>
          </div>
          <div>
            <p className='mb-6 text-3xl'>Custom</p>
            <p>
              The medium is the message. Capture it all through inventive type.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
