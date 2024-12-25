// __tests__/Loader.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../app/components/Loader';

describe('Loader', () => {
  it('renders the loader component', () => {
    const { container } = render(<Loader />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    const { container } = render(<Loader />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveClass('spinner');
  });

  it('contains a circle element', () => {
    const { container } = render(<Loader />);
    const circleElement = container.querySelector('circle');
    expect(circleElement).toBeInTheDocument();
  });
});