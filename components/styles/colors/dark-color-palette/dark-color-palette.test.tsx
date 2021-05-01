import React from 'react';
import { render } from '@testing-library/react';
import { Samples } from './dark-color-palette.compositions';

describe('dark color palette', () => {
  test('samples should render', () => {
    const { getByTestId } = render(<Samples />);
    const samples = getByTestId('samples');
    expect(samples).toBeTruthy();
  });
});
