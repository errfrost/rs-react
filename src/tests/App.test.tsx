import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App render', () => {
  it('it should render App', () => {
    render(<App />);
    expect(screen.getByText(/RSS - React/i)).toBeInTheDocument();
  });
});
