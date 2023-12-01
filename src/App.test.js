import { render, screen } from '@testing-library/react';
import App from './App';

test('renders webpage', () => {
  render(<App />);

  // Log the entire rendered component for debugging
  console.log(screen.debug());

  // Check if certain elements are present
  expect(screen.getAllByText("Projects")).toBeInTheDocument();
  expect(screen.getAllByText("Contact Me")).toBeInTheDocument();
  expect(screen.getAllByText("About Me")).toBeInTheDocument();
});
