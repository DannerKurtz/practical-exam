import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<'button'> {}

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <>
      <button
        className={twMerge(
          'px-5 h-12 flex justify-between items-center bg-gray-100 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300',
          className
        )}
        {...props}
      />
    </>
  );
}
