import React from 'react';
import Calculator from '../../src/app/components/Calculator'
import { render, screen, fireEvent} from '@testing-library/react';
import {expect,it,describe} from 'vitest'


describe('Calculator', () => {
  it('renders Calculator heading correctly', () => {
    render(<Calculator />);
    // Ensure Calculator title is rendered
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Calculator/i);
    expect(heading).toHaveClass('text-4xl', 'font-bold', 'mb-6', 'text-center', 'text-gray-800');
    const darkModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
    fireEvent.click(darkModeButton);
    expect(heading).toHaveClass('text-4xl', 'font-bold', 'mb-6', 'text-center', 'text-white');
    expect(heading).not.toHaveClass('text-gray-800');
  });

  it('should render Number 1 (Label) correctly', () => {
    // Check label
    const { getByText } = render(<Calculator/>);

    // Get the label element by its text content
    const label1 = getByText('Number 1');
    expect(label1).toBeInTheDocument();
    //when dark mode is off (initially)
    expect(label1).toHaveClass('text-lg', 'font-semibold', 'text-gray-800');
    const darkModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
    fireEvent.click(darkModeButton);
    expect(label1).toHaveClass('text-lg', 'font-semibold', 'text-gray-300');
    expect(label1).not.toHaveClass('text-gray-800');
  })
  it('should render Number 2 (Label) correctly', () => {
    // Check label
    const { getByText } = render(<Calculator/>);

    // Get the label element by its text content
    const label2 = getByText('Number 2');

    expect(label2).toBeInTheDocument();
    //when dark mode is off (initially)
    expect(label2).toHaveClass('text-lg', 'font-semibold', 'text-gray-800');
    const darkModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
    fireEvent.click(darkModeButton);
    expect(label2).toHaveClass('text-lg', 'font-semibold', 'text-gray-300');
    expect(label2).not.toHaveClass('text-gray-800');
  })
  it('should render Calculate Sum Button correctly', () => {
    render(<Calculator />);
    const calculateSumButton = screen.getByText(/Calculate Sum/i);
    expect(calculateSumButton).toBeInTheDocument();
  })

  it('toggles dark mode for main correctly', () => {
    render(<Calculator />);

    // Ensure initial dark mode is off
    const calculatorElement = screen.getByRole('main');
    expect(calculatorElement).not.toHaveClass('from-gray-800');
    expect(calculatorElement).not.toHaveClass('via-gray-700');
    expect(calculatorElement).not.toHaveClass('to-gray-600');

    // Click the dark mode toggle button
    const darkModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
    fireEvent.click(darkModeButton);

    // Ensure dark mode is toggled on
    expect(calculatorElement).toHaveClass('from-gray-800');
    expect(calculatorElement).toHaveClass('via-gray-700');
    expect(calculatorElement).toHaveClass('to-gray-600');

    // Click the dark mode toggle button again
    fireEvent.click(darkModeButton);

    // Ensure dark mode is toggled off
    expect(calculatorElement).not.toHaveClass('from-gray-800');
    expect(calculatorElement).not.toHaveClass('via-gray-700');
    expect(calculatorElement).not.toHaveClass('to-gray-600');
  });

  it('toggles light mode for main correctly', () => {
    render(<Calculator />);
  
    // Ensure initial light mode is on
    const calculatorElement = screen.getByRole('main');
    expect(calculatorElement).toHaveClass('from-purple-500');
    expect(calculatorElement).toHaveClass('via-pink-500');
    expect(calculatorElement).toHaveClass('to-red-500');
  
    // Click the light mode toggle button
    const lightModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
    fireEvent.click(lightModeButton);
  
    // Ensure light mode is toggled off
    expect(calculatorElement).not.toHaveClass('from-purple-500');
    expect(calculatorElement).not.toHaveClass('via-pink-500');
    expect(calculatorElement).not.toHaveClass('to-red-500');
  
    // Click the light mode toggle button again
    fireEvent.click(lightModeButton);
  
    // Ensure light mode is toggled on
    expect(calculatorElement).toHaveClass('from-purple-500');
    expect(calculatorElement).toHaveClass('via-pink-500');
    expect(calculatorElement).toHaveClass('to-red-500');
  });

  it('calculates sum correctly', () => {
    render(<Calculator />);
    
    // Enter values in Number 1 and Number 2 inputs
    const num1Input = screen.getByLabelText(/Number 1/i)
    const num2Input = screen.getByLabelText(/Number 2/i)
    fireEvent.change(num1Input, { target: { value: '10' } });
    fireEvent.change(num2Input, { target: { value: '5' } });

    // Click Calculate Sum button
    const calculateButton = screen.getByText(/Calculate Sum/i);
    fireEvent.click(calculateButton);

    // Ensure result is displayed correctly
    const resultElement = screen.getByText(/15/i);
    expect(resultElement).toBeInTheDocument();
  });
  it('renders the toggler button for light/dark theme correctly',()=>{
    render(<Calculator />);
    const togglerButton = screen.getByRole('button', { name: /☀️|🌙/ });
    expect(togglerButton).toBeInTheDocument();
  })
});
