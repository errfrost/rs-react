import React, { useEffect, useState } from 'react';
import { IProducts, IProductCard } from 'types/interface';
import ProductCard from './product';

interface Props {
  products: IProductCard[];
}

export function ProductList({ products }: Props) {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default function ProductsWrapper() {
  const [products, setProducts] = useState<IProductCard[]>([]);
  useEffect(() => {
    fetch(`${window.location.protocol}//${window.location.host}/data/products.json`)
      .then((resp) => resp.json())
      .then((data) => setProducts(data.products));
  });

  return <div className="products">{products && <ProductList products={products} />}</div>;
}
