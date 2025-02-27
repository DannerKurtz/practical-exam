import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export default function Button(props: ButtonProps) {
  return (
    <>
      <button
        className='px-5 h-12 flex justify-between items-center bg-gray-100 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900'
        {...props}
      />
    </>
  );
}
