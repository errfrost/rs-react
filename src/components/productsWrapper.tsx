import React from 'react';
import { IProducts, IProductCard } from 'types/interface';
import ProductCard from './product';

interface Props {
  products: IProductCard[];
}

function ProductList({ products }: Props) {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default class ProductsWrapper extends React.Component<object, IProducts> {
  constructor(props = {}) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(`${window.location.protocol}//${window.location.host}/data/products.json`)
      .then((resp) => resp.json())
      .then((data) => this.setState({ products: data.products }));
  }

  render() {
    const { products } = this.state;
    return <div className="products">{products && <ProductList products={products} />}</div>;
  }
}
