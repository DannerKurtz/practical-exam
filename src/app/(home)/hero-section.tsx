import { ComponentProps } from 'react';

interface HeroSectionProps extends ComponentProps<'img'> {}

export default function HeroSection(props: HeroSectionProps) {
  return (
    <>
      <img
        className='w-full h-auto'
        src={
          props.src ||
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsalonlfc.com%2Fimage-not-found%2F&psig=AOvVaw0V0gJAAcPW23NLwmIGC2iC&ust=1740731474105000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiFrJ2444sDFQAAAAAdAAAAABAE'
        }
        {...props}
      />
    </>
  );
}
