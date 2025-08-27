import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import CardList from './CardList';

it('matches snapshot', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: 'JohnJohn',
			email: 'john@gmail.com'
		}
	];
	const { asFragment } = render(<CardList robots={mockRobots} />);
	expect(asFragment()).toMatchSnapshot();
})