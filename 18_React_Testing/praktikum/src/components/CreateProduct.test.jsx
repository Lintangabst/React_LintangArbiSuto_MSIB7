import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CreateProduct from './CreateProduct';
import rootReducer from '../reducers'; // Adjust the import according to your root reducer location
import '@testing-library/jest-dom'; // Corrected import

const renderWithRedux = (component, { initialState, store = createStore(rootReducer, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

describe('CreateProduct Component', () => {
  test('should accept input for Product Name', () => {
    renderWithRedux(<CreateProduct />);

    const input = screen.getByPlaceholderText(/Product Name/i);
    fireEvent.change(input, { target: { value: 'Test Product' } });

    expect(input.value).toBe('Test Product');
  });

  test('should save and display selected values correctly', () => {
    renderWithRedux(<CreateProduct />);

    fireEvent.change(screen.getByPlaceholderText(/Product Name/i), { target: { value: 'Test Product' } });
    fireEvent.change(screen.getByPlaceholderText(/Product Category/i), { target: { value: 'Category 1' } });
    fireEvent.change(screen.getByPlaceholderText(/Product Freshness/i), { target: { value: 'Fresh' } });
    fireEvent.change(screen.getByPlaceholderText(/Product Price/i), { target: { value: '100' } });
    fireEvent.change(screen.getByPlaceholderText(/Image URL/i), { target: { value: 'http://example.com/image.png' } });
    fireEvent.change(screen.getByPlaceholderText(/Additional Description/i), { target: { value: 'Some details here' } });

    // Check values in input fields
    expect(screen.getByPlaceholderText(/Product Name/i).value).toBe('Test Product');
    expect(screen.getByPlaceholderText(/Product Category/i).value).toBe('Category 1');
    expect(screen.getByPlaceholderText(/Product Freshness/i).value).toBe('Fresh');
    expect(screen.getByPlaceholderText(/Product Price/i).value).toBe('100');
    expect(screen.getByPlaceholderText(/Image URL/i).value).toBe('http://example.com/image.png');
    expect(screen.getByPlaceholderText(/Additional Description/i).value).toBe('Some details here');
  });

  test('should validate Product Name field for invalid characters', () => {
    renderWithRedux(<CreateProduct />);

    const input = screen.getByPlaceholderText(/Product Name/i);
    fireEvent.change(input, { target: { value: '@InvalidName' } });
    fireEvent.submit(screen.getByRole('button'));

    // Check if error message for invalid characters appears
    expect(screen.getByText(/Product Name is invalid/i)).toBeInTheDocument();
    expect(input.value).toBe(''); // Validation logic should clear the input
  });

  test('should show error for Product Name exceeding 25 characters', () => {
    renderWithRedux(<CreateProduct />);

    const input = screen.getByPlaceholderText(/Product Name/i);
    fireEvent.change(input, { target: { value: 'This product name is way too long' } });
    fireEvent.submit(screen.getByRole('button'));

    // Check for error message for exceeding character limit
    expect(screen.getByText(/Product Name cannot exceed 25 characters/i)).toBeInTheDocument();
    expect(input.value).toBe(''); // Validation logic should clear the input
  });

  test('should show error for empty fields', () => {
    renderWithRedux(<CreateProduct />);

    fireEvent.submit(screen.getByRole('button'));

    // Check for error messages
    expect(screen.getByText(/Product Name cannot be empty/i)).toBeInTheDocument();
    expect(screen.getByText(/Product Category cannot be empty/i)).toBeInTheDocument();
    expect(screen.getByText(/Product Freshness cannot be empty/i)).toBeInTheDocument();
    expect(screen.getByText(/Product Price cannot be empty/i)).toBeInTheDocument();
  });
});
