import Button from '@/components/button';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className='bg-blue-600 h-16 flex justify-between items-center px-5'>
      <nav className='max-w-[1240px] w-full mx-auto'>
        <ul className='flex justify-between items-center'>
          <li className='bg-gray-100 text-black inline-flex items-center space-x-1 p-2 rounded-xl'>
            <h1 className='text-3xl font-bold'>Practical</h1>
            <p className='text-2xl '>exam</p>
          </li>
          <li className='pr-5'>
            <Button>
              <ShoppingCart className='text-black' />
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
