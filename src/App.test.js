import { render, screen } from '@testing-library/react';
import App from './App';

test('renders webpage', () => {
  render(<App />);

  // Check if certain elements are present
  expect(screen.getAllByText("Projects")).toBeInTheDocument();
  expect(screen.getAllByText("Contact Me")).toBeInTheDocument();
  expect(screen.getAllByText("About Me")).toBeInTheDocument();
});
