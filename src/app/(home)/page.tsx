import HeroSection from './hero-section';
import ProductCard from './product-card';

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection src='https://random.imagecdn.app/940/300' />
      </div>
      <div className='flex justify-center items-center flex-col'>
        <div className='grid md:grid-cols-4 gap-3.5'>
          
        </div>
      </div>
    </div>
  );
}
