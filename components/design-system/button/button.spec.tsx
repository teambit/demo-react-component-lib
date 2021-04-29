import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';

import { CallToActionButton, MainButton, LightButton } from './button.composition';

it('should render', () => {
	const { getByText } = render(<CallToActionButton />);
	const rendered = getByText('Submit');

	expect(rendered).to.exist;
});

it('should render secondary', () => {
	const { getByText } = render(<MainButton />);
	const rendered = getByText('Update');

	expect(rendered).to.exist;
});

it('should pass classname', () => {
	const { getByText } = render(<CallToActionButton className="test-class" />);
	const rendered = getByText('Submit');

	expect(rendered.className).to.include('test-class');
});

it('should use variation html attribute', () => {
	const { getByText } = render(<LightButton className="test-class" />);
	const rendered = getByText('learn more');

	expect(rendered.getAttribute('data-variation')).to.equal('normal');
});

it('should have "cta" as html attribute, when using cta variation', () => {
	const { getByText } = render(<CallToActionButton importance="cta" className="test-class" />);
	const rendered = getByText('Submit');

	expect(rendered.getAttribute('data-variation')).to.equal('cta');
});

it('should use low elevation by default', () => {
	const { getByText } = render(<CallToActionButton className="test-class" />);
	const rendered = getByText('Submit');

	expect(rendered.className).to.include('low');
});

it('should use specific elevation', () => {
	const { getByText } = render(<CallToActionButton className="test-class" elevation="high" />);
	const rendered = getByText('Submit');

	expect(rendered.className).to.include('high');
});
