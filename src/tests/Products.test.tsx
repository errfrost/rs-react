import { render, screen } from '@testing-library/react';
import { ProductList } from '../components/productsWrapper';
import ProductCard from '../components/product';
import products from './mock';

describe('Render ProductCards', () => {
  it('it should render 8 ProductCards', () => {
    render(<ProductList products={products} />);
    const productCards = screen.getAllByTestId('product-card');
    expect(productCards[0]).toBeInTheDocument();
    expect(productCards.length).toBe(8);
  });
});

describe('Render Card', () => {
  it('it should render Card details', () => {
    const product = products[0];
    render(<ProductCard key={product.id} product={product} />);
    expect(screen.getAllByTestId('product-card')).toBeInTheDocument();
    expect(screen.getByText(/iPhone 9/i)).toBeInTheDocument();
    expect(screen.getByText(/549/i)).toBeInTheDocument();
    expect(screen.getByText(/Smartphones/i)).toBeInTheDocument();
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    expect(screen.getByText(/4.69/i)).toBeInTheDocument();
  });
});
