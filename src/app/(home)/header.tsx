import Link from 'next/link';
import Button from '@/components/button';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className='bg-blue-600 h-16 flex justify-between items-center px-5'>
      <nav className='max-w-[1240px] w-full mx-auto'>
        <ul className='flex justify-between items-center'>
          <li className='bg-gray-100 text-black inline-flex items-center space-x-1 p-2 rounded-xl cursor-pointer'>
            <Link href='/'>
              <div className='flex items-center'>
                <h1 className='text-3xl font-bold'>Practical</h1>
                <p className='text-2xl'>exam</p>
              </div>
            </Link>
          </li>
          <li className='pr-5'>
            <Link href='/cart'>
              <Button>
                <ShoppingCart className='text-black' />
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
