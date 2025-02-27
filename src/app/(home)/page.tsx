import HeroSection from './hero-section';

import ListedProductsCard from './listed-products-card';

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection src='https://random.imagecdn.app/940/300' />
      </div>
      <div className='flex justify-center items-center flex-col'>
        <div className=''>
          <ListedProductsCard />
        </div>
      </div>
    </div>
  );
}
