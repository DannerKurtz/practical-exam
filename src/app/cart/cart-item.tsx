import Button from '@/components/button';

interface CartItemProps {
  item: {
    name: string;
    image: string;
    price: number | string;
    quantity: number;
  };
  handleIncrement: (name: string, operation: string) => void;
}

export default function CartItem({ item, handleIncrement }: CartItemProps) {
  return (
    <li className='flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm'>
      <img
        src={item.image}
        alt={item.name}
        className='w-16 h-16 rounded-lg object-cover'
      />
      <div className='flex-1 ml-4'>
        <p className='text-lg font-medium'>{item.name}</p>
        <p className='text-gray-600'>
          R${' '}
          {typeof item.price === 'number'
            ? item.price.toFixed(2)
            : Number(item.price).toFixed(2)}
        </p>
      </div>
      <div className='flex items-center gap-3'>
        <Button
          onClick={() => handleIncrement(item.name, '-')}
          className='w-8 h-8 bg-red-500 text-lg font-bold rounded-full hover:bg-red-600 transition flex justify-center items-center'
        >
          −
        </Button>
        <span className='text-xl font-semibold'>{item.quantity}</span>
        <Button
          onClick={() => handleIncrement(item.name, '+')}
          className='w-8 h-8 bg-green-500 text-lg font-bold rounded-full hover:bg-green-600 transition flex justify-center items-center'
        >
          +
        </Button>
      </div>
      <p className='ml-4 font-semibold text-gray-700'>
        R$ {(Number(item.price) * item.quantity).toFixed(2)}
      </p>
    </li>
  );
}
