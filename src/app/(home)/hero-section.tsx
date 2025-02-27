import productsJson from './../../../products.json';

interface HeroSectionProps {
  name: string;
  detail: string;
  price: string;
  hero: string;
  image: string;
}

export default function HeroSection() {
  let hero: HeroSectionProps = {
    name: '',
    detail: '',
    price: '',
    hero: '',
    image: '',
  };

  for (let i = 0; i < productsJson.length; i++) {
    const element = productsJson[i];

    if (element.hero) {
      hero = element;
    }
  }

  return (
    <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden'>
      <img
        className='w-full h-full object-cover'
        src={hero.image}
        alt={hero.name}
      />
      <div className='absolute inset-0 bg-black bg-opacity-40'></div>
      <div className='absolute inset-0 flex flex-col justify-center items-start text-white px-6 md:px-12 lg:px-24'>
        <span className='text-lg md:text-xl lg:text-2xl font-bold text-yellow-400 mb-2'>
          {hero.hero}
        </span>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
          {hero.name}
        </h1>
        <p className='text-lg md:text-xl lg:text-2xl max-w-2xl mb-6'>
          {hero.detail}
        </p>
        <div className='flex items-center gap-6'>
          <span className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            ${hero.price}
          </span>
          <button className='bg-yellow-400 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors'>
            Veja Mais.
          </button>
        </div>
      </div>
    </div>
  );
}
