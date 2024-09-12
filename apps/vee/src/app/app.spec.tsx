import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should render some content', () => {
    const { container } = render(<App />);
    expect(container.firstChild).not.toBeNull();
  });

  it('should render at least one heading', () => {
    const { container } = render(<App />);
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBeGreaterThan(0);
  });
});
