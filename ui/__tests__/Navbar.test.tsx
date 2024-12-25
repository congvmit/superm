// __tests__/Navbar.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Navbar from '../app/components/Navbar';
import { usePathname } from 'next/navigation';

// Mock the usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Navbar', () => {
  it('renders the navbar component', () => {
    (usePathname as jest.Mock).mockReturnValue('/');
    const { getByText } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(getByText('SuperM')).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Products')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Cart (0)')).toBeInTheDocument();
  });

  it('highlights the active link', () => {
    (usePathname as jest.Mock).mockReturnValue('/products');
    const { getByText } = render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    expect(getByText('Products')).toHaveClass('active');
  });
});