import React from 'react';
import Calculator from '../../src/app/components/Calculator'
import { render, screen, fireEvent} from '@testing-library/react';
import {expect,it,describe} from 'vitest'
import {userEvent} from '@testing-library/user-event';


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

  describe('checking the rendering of the input field for Number 1 in light/dark mode',()=>{
    it('renders input field for Number 1 in light mode', () => {
      render(<Calculator />);
      const num1Input = screen.getByLabelText(/Number 1/i);
      
      // Check if the input field is rendered
      expect(num1Input).toBeInTheDocument();
  
      // Check if the input field is of type number
      expect(num1Input).toHaveAttribute('type', 'number');
  
      // Check if the input field has the correct id
      expect(num1Input).toHaveAttribute('id', 'num1');
  
      // Check if the input field has the required attribute
      expect(num1Input).toBeRequired();
  
      // Check if the input field is not in dark mode
      expect(num1Input).not.toHaveClass('dark:bg-gray-700');
    });

    it('renders input field for Number 1 in dark mode', () => {
      render(<Calculator />);
      const darkModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
      fireEvent.click(darkModeButton);
  
      const num1Input = screen.getByLabelText(/Number 1/i);
      
      // Check if the input field is rendered
      expect(num1Input).toBeInTheDocument();
  
      // Check if the input field is of type number
      expect(num1Input).toHaveAttribute('type', 'number');
  
      // Check if the input field has the correct id
      expect(num1Input).toHaveAttribute('id', 'num1');
  
      // Check if the input field has the required attribute
      expect(num1Input).toBeRequired();
  
      // Check if the input field is in dark mode
      expect(num1Input).toHaveClass('dark:bg-gray-700');
    });

    it('updates num1 state on input change', () => {
      const { getByTestId } = render(<Calculator />);
      const inputElement = getByTestId('num1-input') as HTMLInputElement;
   
      // Simulate user input
      fireEvent.change(inputElement, { target: { value: '123' } });
   
      // Check if the input value is updated correctly
      expect(inputElement.value).toBe('123');
    });
  })

  describe('checking the rendering of the input field for Number 2 in light/dark mode',()=>{
    it('renders input field for Number 2 in light mode', () => {
      render(<Calculator />);
      const num2Input = screen.getByLabelText(/Number 2/i);
      
      // Check if the input field is rendered
      expect(num2Input).toBeInTheDocument();
  
      // Check if the input field is of type number
      expect(num2Input).toHaveAttribute('type', 'number');
  
      // Check if the input field has the correct id
      expect(num2Input).toHaveAttribute('id', 'num2');
  
      // Check if the input field has the required attribute
      expect(num2Input).toBeRequired();
  
      // Check if the input field is not in dark mode
      expect(num2Input).not.toHaveClass('dark:bg-gray-700');
    });

    it('renders input field for Number 2 in dark mode', () => {
      render(<Calculator />);
      const darkModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
      fireEvent.click(darkModeButton);
  
      const num2Input = screen.getByLabelText(/Number 2/i);
      
      // Check if the input field is rendered
      expect(num2Input).toBeInTheDocument();
  
      // Check if the input field is of type number
      expect(num2Input).toHaveAttribute('type', 'number');
  
      // Check if the input field has the correct id
      expect(num2Input).toHaveAttribute('id', 'num2');
  
      // Check if the input field has the required attribute
      expect(num2Input).toBeRequired();
  
      // Check if the input field is in dark mode
      expect(num2Input).toHaveClass('dark:bg-gray-700');
    });

    it('updates num2 state on input change', () => {
      const { getByTestId } = render(<Calculator />);
      const inputElement = getByTestId('num2-input') as HTMLInputElement;
   
      // Simulate user input
      fireEvent.change(inputElement, { target: { value: '143' } });
   
      // Check if the input value is updated correctly
      expect(inputElement.value).toBe('143');
    });
  })

  it('should render Calculate Sum Button correctly', () => {
    render(<Calculator/>);
   
    // Get the button element by its text content
    const calSumButton = screen.getByRole('button', { name: /Calculate Sum/i });
    expect(calSumButton).toBeInTheDocument();
    //Light Mode
    expect(calSumButton).toHaveClass('from-purple-600', 'to-pink-600');
 
    //dark mode
    const darkModeButton = screen.getByRole('button', { name: /☀️|🌙/ });
    fireEvent.click(darkModeButton);
    expect(calSumButton).not.toHaveClass('from-purple-600', 'to-pink-600');
    expect(calSumButton).toHaveClass('from-gray-600', 'to-gray-500');
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
  
    // Ensure initially light mode is on
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
    // Check initial icon
  let toggleButton = screen.getByRole('button', { name: /🌙/ });
  expect(toggleButton).toBeInTheDocument();

  // Toggle to dark mode
  fireEvent.click(toggleButton);
  toggleButton = screen.getByRole('button', { name: /☀️/ });
  expect(toggleButton).toBeInTheDocument();

  // Toggle back to light mode
  fireEvent.click(toggleButton);
  toggleButton = screen.getByRole('button', { name: /🌙/ });
  expect(toggleButton).toBeInTheDocument();
  })
  it('renders the toggler button for light/dark theme correctly',async()=>{
    render(<Calculator />);
    const toggleButton = screen.getByRole('button', { name: /🌙/ });
    const user = userEvent.setup();
    await user.click(toggleButton);
    expect(screen.getByRole('button',{name: /☀️/})).toBeInTheDocument();
    await user.click(toggleButton);
    expect(screen.getByRole('button',{name: /🌙/})).toBeInTheDocument();
  })
})
