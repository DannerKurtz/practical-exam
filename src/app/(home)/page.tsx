import HeroSection from './hero-section';
import ProductCard from './product-card';

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection src='https://random.imagecdn.app/940/300' />
      </div>
      <div>
        <ProductCard></ProductCard>
      </div>
    </main>
  );
}
