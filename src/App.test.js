import { render, screen } from '@testing-library/react';
import App from './App';

test('renders instructions text', () => {
  render(<App />);
  const instructionsText = screen.getByText(/Please set a minimum/i);
  expect(instructionsText).toBeInTheDocument();
});
