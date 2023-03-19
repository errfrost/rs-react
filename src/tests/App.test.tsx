import { render, screen } from '@testing-library/react';
import App from '../App';
import NotFound from '../pages/404';
import About from '../pages/About';

describe('App Home render', () => {
  it('it should render App', () => {
    render(<App />);
    expect(screen.getByText(/RSS - React/i)).toBeInTheDocument();
  });
});

describe('App 404 render', () => {
  it('it should render App', () => {
    render(<NotFound />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});

describe('App About render', () => {
  it('it should render App', () => {
    render(<About />);
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
  });
});
