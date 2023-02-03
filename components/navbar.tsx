import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/images/logo/black-logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className='absolute w-full'>
      <div className='container mx-auto flex items-center justify-between py-4'>
        <div className='w-16'>
          <Image src={logo} alt='8PM' priority />
        </div>
        <div>
          <ul
            className={`${
              !menuOpen && 'hidden'
            } absolute right-4 top-20 list-none rounded bg-white p-4 text-lg uppercase text-smoky-black sm:static sm:flex sm:rounded-none sm:bg-transparent sm:p-0`}
          >
            <li className='mb-2 sm:mb-0'>
              <Link href='/work' className='p-2 hover:text-zinc-700'>
                Work
              </Link>
            </li>
            <li className='mb-2 sm:mb-0'>
              <Link href='/blog' className='p-2 hover:text-zinc-700'>
                Blog
              </Link>
            </li>
            <li className='mb-2 sm:mb-0'>
              <Link href='/services' className='p-2 hover:text-zinc-700'>
                Services
              </Link>
            </li>
            <li>
              <Link href='/contact' className='p-2 hover:text-zinc-700'>
                Contact
              </Link>
            </li>
          </ul>
          <div className='z-20 block sm:hidden'>
            {/* Hamburger icon */}
            <button
              className='stroke-primary p-2 text-primary outline-none focus:outline-none'
              onClick={openMenu}
            >
              {menuOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-8 w-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-8 w-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
