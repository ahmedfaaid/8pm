export default function Info() {
  return (
    <section className='flex h-screen items-center justify-center bg-primary'>
      <div className='container gap-x-1.5 px-4 leading-tight tracking-wide text-white sm:grid sm:grid-cols-2 sm:px-0 md:gap-x-0'>
        <div className='mb-10 font-medium sm:mb-0'>
          <p className='mb-10 text-center text-3xl sm:mb-20 sm:text-left md:text-4xl'>
            HI, WE ARE 8PM!
          </p>
          <p className='text-center text-5xl sm:text-left md:text-6xl'>
            We design with purpose.
          </p>
        </div>
        <div className='text-xl md:text-2xl'>
          <p className='mb-8'>
            The medium is the message, but the message also defines the medium.
            I am constantly experimenting with both, without limits or
            restrictions. My only rule: Create only when there’s something to
            say.
          </p>
          <p className='mb-8'>My art is my statement, and always will be.</p>
          <button className='w-full bg-white py-4 text-base font-bold text-primary hover:bg-gray-100'>
            SEE WHAT WE'VE DONE
          </button>
        </div>
      </div>
    </section>
  );
}
