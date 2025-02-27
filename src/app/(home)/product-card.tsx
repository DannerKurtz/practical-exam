import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import Button from '../../components/button';

export default function ProductCard() {
  return (
    <>
      <div className='bg-zinc-100 w-[270px] h-[478px] flex justify-start items-center flex-col m-2 cursor-pointer rounded-sm'>
        <Image
          className='w-[230px] mt-4'
          src='https://random.imagecdn.app/300/300'
          alt='Imagem aleatória'
          width={300}
          height={300}
        />
        <div className='m-4 flex justify-between items-stretch flex-col'>
          <div className='mb-4 flex justify-between items-stretch flex-col'>
            <h2 className='font-bold text-3xl'>Product 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            <span className='text-2xl text-red-500'>R$ 99,00</span>
          </div>
          <Button>
            Add to Card <ShoppingCart />
          </Button>
        </div>
      </div>
    </>
  );
}
