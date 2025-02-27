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
  const listProducts: IListProducts[] = [];

  productsJson.forEach((product) => {
    if (!product.hero) {
      listProducts.push(product);
    }
  });

  return (
    <>
      <div className='grid md:grid-cols-4 gap-3.5'>
        {listProducts.map((products) => (
          <ProductCard
            name={products.name}
            detail={products.detail}
            price={products.price}
            info={products?.info}
            image='https://random.imagecdn.app/300/300'
            offer={products?.offer}
          />
        ))}
      </div>
    </>
  );
}
