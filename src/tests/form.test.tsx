import { render, screen } from '@testing-library/react';
import Form from '../components/form';
import { FormCards } from '../components/formCardsWrapper';

describe('Render Form', () => {
  it('it should render Form', () => {
    const link = render(<Form newCard={() => { }} />);
    expect(link).toBeTruthy();
  });
});

describe('Render FormCards', () => {
  it('it should render FormCards', () => {
    const card = { firstName: "Joe", lastName: "Biden", birthday: "12-12-2000", country: "USA", gender: "Male", confirmData: true, photo: " " };
    const link = render(<FormCards cards={[card]} />);
    expect(screen.getByText(/Joe/i)).toBeInTheDocument();
    expect(screen.getByText(/Biden/i)).toBeInTheDocument();
    expect(screen.getByText(/12-12-2000/i)).toBeInTheDocument();
    expect(screen.getByText(/USA/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
  });
});
