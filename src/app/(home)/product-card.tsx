import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import ButtonAddCart from '../../components/buttonAddCart';

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
    <div className='bg-gray-100 text-black w-full max-w-[250px] flex flex-col justify-between items-center p-4 rounded-lg shadow-md border border-gray-200'>
      {/* Imagem Centralizada */}
      <div className='relative w-full flex justify-center'>
        <Image
          className='w-[180px] h-[180px] object-cover rounded-lg'
          src={props.image}
          alt={props.name}
          width={250}
          height={250}
        />
        {props.offer && (
          <span className='absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-md'>
            {props.offer}
          </span>
        )}
      </div>

      {/* Informações do Produto */}
      <div className='flex flex-col flex-1 w-full text-center mt-3'>
        <h2 className='font-bold text-lg'>{props.name}</h2>
        <p className='text-gray-600 text-sm'>{props.detail}</p>
        <span className='text-xl text-red-500 font-bold mt-2'>
          {props.price}
        </span>
        {props.info && (
          <p className='text-sm text-red-500 mt-1'>{props.info}</p>
        )}
      </div>

      {/* Botão de Adicionar ao Carrinho */}
      <div className='w-full mt-auto'>
        <ButtonAddCart
          name={props.name}
          price={props.price}
          image={props.image}
          className='bg-gray-500 text-white w-full py-2 rounded-lg hover:bg-gray-700 transition'
        >
          Adicionar ao Carrinho <ShoppingCart className='inline ml-1' />
        </ButtonAddCart>
      </div>
    </div>
  );
}
