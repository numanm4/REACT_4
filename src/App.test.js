import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});

test('search functionality works', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Search for a location.../i);
  expect(inputElement).toBeInTheDocument();
});
