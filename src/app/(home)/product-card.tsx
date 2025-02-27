import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import Button from '../../components/button';

interface ProductCardProps {
  name: string;
  detail: string;
  price: string;
  image: string;
  hero?: string;
  info?: string;
  offer?: string;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <>
      <div className='bg-gray-100 text-black w-[270px] h-auto flex justify-start items-center flex-col m-2 cursor-pointer rounded-sm'>
        <div className='relative'>
          <Image
            className='w-[230px] mt-4'
            src={props.image}
            alt='Imagem aleatória'
            width={300}
            height={300}
          />
          {props.offer && (
            <span className='absolute text-red-500 top-5 right-4 font-bold'>
              {props.offer}
            </span>
          )}
        </div>
        <div className='m-4 flex justify-between items-stretch flex-col '>
          <div className='mb-4 flex justify-between items-stretch flex-col'>
            <h2 className='font-bold text-3xl'>{props.name}</h2>
            <p>{props.detail}</p>
            <span className='text-2xl text-red-500'>{props.price}</span>
            {props.info && <p className='text-red-500'>{props.info}</p>}
          </div>
          <Button className='bg-gray-500 text-white hover:bg-gray-700 hover:text-gray-100'>
            Add to Card <ShoppingCart />
          </Button>
        </div>
      </div>
    </>
  );
}
