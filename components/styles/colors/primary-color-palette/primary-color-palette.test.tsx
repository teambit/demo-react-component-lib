import React from 'react';
import { render } from '@testing-library/react';
import { Samples } from './primary-color-palette.compositions';

describe('primary color palette', () => {
  test('samples should render', () => {
    const { getByTestId } = render(<Samples />);
    const samples = getByTestId('samples');
    expect(samples).toBeTruthy();
  });
});
