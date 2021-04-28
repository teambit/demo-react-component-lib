import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import {
	InputExample,
	InputWithError,
	TextAreaExample,
	TextAreaWithError,
} from './input.composition';

describe('Input component', () => {
	it('should render input correctly', () => {
		const { getByTestId } = render(<InputExample />);
		const rendered = getByTestId('test-input');

		expect(rendered).to.exist;
		expect(rendered.tagName).to.equal('INPUT');
	});

	it('should not have data-error attribute', () => {
		const { getByTestId } = render(<InputExample />);
		const rendered = getByTestId('test-input');

		expect(rendered.getAttribute('data-error')).to.equal(null);
	});

	it('should have data-error attribute', () => {
		const { getByTestId } = render(<InputWithError />);
		const rendered = getByTestId('test-input');

		expect(rendered.getAttribute('data-error')).to.exist;
	});
});

describe('TextArea component', () => {
	it('should render text-area correctly', () => {
		const { getByTestId } = render(<TextAreaExample />);
		const rendered = getByTestId('test-textarea');

		expect(rendered).to.exist;
		expect(rendered.tagName).to.equal('TEXTAREA');
	});

	it('should not have data-error attribute', () => {
		const { getByTestId } = render(<TextAreaExample />);
		const rendered = getByTestId('test-textarea');

		expect(rendered.getAttribute('data-error')).to.equal(null);
	});

	it('should have data-error attribute', () => {
		const { getByTestId } = render(<TextAreaWithError />);
		const rendered = getByTestId('test-textarea');

		expect(rendered.getAttribute('data-error')).to.exist;
	});
});
