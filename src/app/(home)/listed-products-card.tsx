import ProductCard from './product-card';
import productsJson from './../../../products.json';

export default function ListedProductsCard() {
  interface IListProducts {
    name: string;
    detail: string;
    price: string;
    image: string;
    info?: string;
    offer?: string;
  }

  const listProducts: IListProducts[] = productsJson.filter(
    (product) => !product.hero
  );

  return (
    <div className='grid grid-cols-2 gap-3.5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {listProducts.map((products, index) => (
        <ProductCard
          key={index}
          name={products.name}
          detail={products.detail}
          price={products.price}
          info={products?.info}
          image='https://random.imagecdn.app/300/300'
          offer={products?.offer}
        />
      ))}
    </div>
  );
}
