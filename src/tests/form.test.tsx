import { render } from '@testing-library/react';
import Form from '../components/form';

describe('Render Form', () => {
  it('it should render Form', () => {
    const link = render(<Form newCard={() => {}} />);
    expect(link).toBeTruthy();
  });
});
