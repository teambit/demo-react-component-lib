import React from 'react';
import { render } from '@testing-library/react';
import { DropdownExample } from './dropdown.compositions';

describe('dropdown', () => {
  it('should render', () => {
    const { getByTestId } = render(<DropdownExample />);
    const dropdown = getByTestId('dropdown');
    expect(dropdown).toBeTruthy();
  });
});
