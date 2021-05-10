import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect } from 'chai';
import { fake } from 'sinon';

import { Button } from './button';
import { BasicButton } from './button.composition';

const testLoader = <span data-testid="test-loader">loading...</span>;

it('should render with children', () => {
  const { getByText } = render(<BasicButton />);
  const rendered = getByText('Click');
  expect(rendered).to.exist;
});

it('should trigger onClick', () => {
  const onClick = fake();
  const { getByText } = render(
    <Button onClick={onClick}>actual button</Button>
  );
  const rendered = getByText('actual button');

  fireEvent.click(rendered);

  expect(onClick.called).to.be.true;
});

it('should show loader when explicitly set loading={true}', () => {
  const { getByTestId } = render(<Button loader={testLoader} loading={true} />);

  expect(getByTestId('test-loader')).to.exist;
});

it('should not show loader when explicitly set loading={false}', () => {
  const { queryByTestId } = render(
    <Button loader={testLoader} loading={false} />
  );

  expect(queryByTestId('test-loader')).not.to.exist;
});

it('should not render children while loading', () => {
  const { queryByText } = render(
    <Button loader={testLoader} loading={true}>
      actual children
    </Button>
  );

  expect(queryByText('actual children')).not.to.exist;
});

it('should remove loader when changing loading back to ={false}', () => {
  const { queryByTestId, rerender } = render(
    <Button loader={testLoader} loading={true} />
  );
  expect(queryByTestId('test-loader')).to.exist;

  rerender(<Button loader={testLoader} loading={false} />);
  expect(queryByTestId('test-loader')).not.to.exist;
});
