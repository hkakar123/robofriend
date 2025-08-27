import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import CardList from './CardList';

it('matches snapshot', () => {
	const { asFragment } = render(<CardList />);
	expect(asFragment()).toMatchSnapshot();
})