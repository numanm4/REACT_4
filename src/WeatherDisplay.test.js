import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherDisplay from './WeatherDisplay';

test('renders WeatherDisplay component with city name, weather, and temperature', () => {
  const location = {
    city: 'New York',
    weather: 'Sunny',
    temperature: '22°C'
  };

  render(<WeatherDisplay location={location} />);
  
  const cityNameElement = screen.getByText(/New York/i);
  expect(cityNameElement).toBeInTheDocument();

  const weatherElement = screen.getByText(/Sunny/i);
  expect(weatherElement).toBeInTheDocument();

  const temperatureElement = screen.getByText(/22°C/i);
  expect(temperatureElement).toBeInTheDocument();
});
