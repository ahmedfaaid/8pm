import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo/black-logo.png';

export default function Navbar() {
  return (
    <nav className='absolute flex w-full items-center justify-between px-16 py-4'>
      <div className='w-16'>
        <Image src={logo} alt='8PM' priority />
      </div>
      <div>
        <ul className='flex list-none text-lg uppercase text-smoky-black'>
          <li>
            <Link href='/work' className='p-2 hover:text-zinc-700'>
              Work
            </Link>
          </li>
          <li>
            <Link href='/blog' className='p-2 hover:text-zinc-700'>
              Blog
            </Link>
          </li>
          <li>
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
      </div>
    </nav>
  );
}
