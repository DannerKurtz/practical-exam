interface CartTotalProps {
  cart: { price: number | string; quantity: number }[];
}

export default function CartTotal({ cart }: CartTotalProps) {
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className='mt-6 p-4 bg-gray-200 rounded-lg flex justify-between items-center text-xl font-bold text-gray-800'>
      <span>Total:</span>
      <span>R$ {totalPrice.toFixed(2)}</span>
    </div>
  );
}
