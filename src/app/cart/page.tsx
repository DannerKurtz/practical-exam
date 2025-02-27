'use client';

import { useEffect, useState } from 'react';
import CartItem from './cart-item';
import CartTotal from './cart-total';
import { loadCart, updateCart } from './cart-utils';

interface CartItemType {
  name: string;
  image: string;
  price: number | string;
  quantity: number;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
    setCart(loadCart());
  }, []);

  const handleIncrement = (name: string, operation: string) => {
    const updatedCart = cart
      .map((item) =>
        item.name === name
          ? {
              ...item,
              quantity:
                operation === '+' ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    updateCart(updatedCart);
  };

  return (
    <div className='max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 text-black'>
      <h1 className='text-2xl font-bold text-gray-800 text-center mb-4'>
        🛒 Carrinho de Compras
      </h1>

      {cart.length === 0 ? (
        <p className='text-gray-500 text-center p-4 bg-gray-100 rounded-md'>
          Seu carrinho está vazio. Adicione itens para começar! 🛍️
        </p>
      ) : (
        <>
          <ul className='space-y-4'>
            {cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                handleIncrement={handleIncrement}
              />
            ))}
          </ul>

          <CartTotal cart={cart} />
        </>
      )}
    </div>
  );
}
