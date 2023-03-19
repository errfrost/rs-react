import { render, screen } from '@testing-library/react';
import { ProductList } from '../components/productsWrapper';
import products from './mock';

describe('Render ProductCards', () => {
  it('it should render 8 ProductCards', () => {
    render(<ProductList products={products} />);
    const productCards = screen.getAllByTestId('product-card');
    expect(productCards[0]).toBeInTheDocument();
    expect(productCards.length).toBe(8);
  });
});
