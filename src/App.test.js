import { render, screen } from '@testing-library/react';
import App from './App';

test('renders webpage', () => {
  render(<App />);

  // Log the entire rendered component for debugging
  console.log(screen.debug());

  // Check if certain elements are present
  expect(screen.getByText("About Me")).toBeInTheDocument();
  expect(screen.getByText("Projects")).toBeInTheDocument();
  expect(screen.getByText("Contact Me")).toBeInTheDocument();
});
