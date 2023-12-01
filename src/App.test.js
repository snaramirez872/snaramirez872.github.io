import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();

  const eleOne = screen.getByText(/About Me/)
  expect(eleOne).toBeInTheDocument();

  const eleTwo = screen.getByText(/Projects/)
  expect(eleTwo).toBeInTheDocument();

  const eleThree = screen.getByText(/Contact/)
  expect(eleThree).toBeInTheDocument();
});
