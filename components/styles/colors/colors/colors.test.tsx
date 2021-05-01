import React from 'react';
import { render } from '@testing-library/react';
import {
  Purple,
  Blue,
  Pink,
  Green,
  Yellow,
  Red,
  Dark,
  Shadow,
} from './colors.compositions';

describe('Colors', () => {
  test('purple shades are rendered', () => {
    const { getByTestId } = render(<Purple />);
    const purple = getByTestId('purple');
    expect(purple).toBeTruthy();
  });
  test('blue shades are rendered', () => {
    const { getByTestId } = render(<Blue />);
    const blue = getByTestId('blue');
    expect(blue).toBeTruthy();
  });
  test('pink shades are rendered', () => {
    const { getByTestId } = render(<Pink />);
    const pink = getByTestId('pink');
    expect(pink).toBeTruthy();
  });
  test('green shades are rendered', () => {
    const { getByTestId } = render(<Green />);
    const green = getByTestId('green');
    expect(green).toBeTruthy();
  });
  test('yellow shades are rendered', () => {
    const { getByTestId } = render(<Yellow />);
    const yellow = getByTestId('yellow');
    expect(yellow).toBeTruthy();
  });
  test('red shades are rendered', () => {
    const { getByTestId } = render(<Red />);
    const red = getByTestId('red');
    expect(red).toBeTruthy();
  });
  test('dark shades are rendered', () => {
    const { getByTestId } = render(<Dark />);
    const dark = getByTestId('dark');
    expect(dark).toBeTruthy();
  });
  test('shadow shades are rendered', () => {
    const { getByTestId } = render(<Shadow />);
    const shadow = getByTestId('shadow');
    expect(shadow).toBeTruthy();
  });
});
