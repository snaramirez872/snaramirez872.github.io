import { render, screen } from '@testing-library/react';
import App from './App';

test('renders webpage', () => {
  render(<App />);

  // Check if certain elements are present
  const projectsElements = screen.getAllByText("Projects");
  projectsElements.forEach((element) => {
    expect(element).toBeInTheDocument();
  });

  const contactElements = screen.getAllByText("Contact Me");
  contactElements.forEach((element) => {
    expect(element).toBeInTheDocument();
  });

  const aboutElements = screen.getAllByText("About Me");
  aboutElements.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});