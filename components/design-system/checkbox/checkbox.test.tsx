import React from 'react';
import { render } from '@testing-library/react';
import { Checked } from './checkbox.compositions';

describe('dropdown', () => {
  it('should render', () => {
    const { getByTestId } = render(<Checked />);
    const checked = getByTestId('checked');
    expect(checked).toBeTruthy();
  });
});
