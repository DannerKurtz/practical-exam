'use client';

import { ComponentProps, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<'button'> {
  name: string;
  price: string;
  image: string;
}

interface CartItem {
  name: string;
  price: string;
  image: string;
  quantity: number;
}

export default function ButtonAddCart({
  className,
  name,
  price,
  image,
  ...props
}: ButtonProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = loadCartFromLocalStorage();
    setCart(savedCart);
  }, []);

  const addProductToCart = () => {
    const existingItem = cart.find((item) => item.name === name);

    let updatedCart: CartItem[];

    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { name, price, image, quantity: 1 }];
    }

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const saveCartToLocalStorage = (cart: CartItem[]): void => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const loadCartFromLocalStorage = (): CartItem[] => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };

  return (
    <button
      className={twMerge(
        'px-5 h-12 flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl w-full cursor-pointer transition-all duration-300 shadow-md active:scale-95',
        className
      )}
      {...props}
      onClick={addProductToCart}
    >
      Adicionar ao Carrinho
    </button>
  );
}
