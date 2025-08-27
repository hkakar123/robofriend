import { setSearchField, requestRobots } from '../actions';
import { mapDispatchToProps, mapStateToProps } from './App.js';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';
import React from 'react';

describe('mapStateToProps', () => {
	it('should return the correct props from state', () => {
		const mockState = {
			searchRobots: {
				searchField: 'abc'
			}, 
			requestRobots: {
				robots: [{ id: 1, name: 'John'}],
				isPending: true,
				error: 'Something went wrong'
			}
		};

		const expectedProps = {
			searchField: 'abc',
			robots: [{ id: 1, name: 'John'}],
			isPending: true,
			error: 'Something went wrong'
		};

		expect(mapStateToProps(mockState)).toEqual(expectedProps);
	})
})





describe('mapDispatchToProps', () => {
	it('should dispatch setSearchField action onSearchField', () => {
		const dispatch = jest.fn();
		const mockEvent = { target: {value: 'abc' }};
		const props = mapDispatchToProps(dispatch);
		props.onSearchChange(mockEvent);

		expect(dispatch).toHaveBeenCalledWith(setSearchField('abc'));
	});

		it('should dispatch requestRobots action on onRequestRobots', () => {
			const dispatch = jest.fn();
			const props = mapDispatchToProps(dispatch);

			props.onRequestRobots();

			expect(dispatch).toHaveBeenCalled();
  		expect(typeof dispatch.mock.calls[0][0]).toBe('function'); // Ensure it was a function (thunk)
		});
});


test('calls onRequestRobots when componenet mount', () => {
	const mockOnRequestRobots = jest.fn();

	render(
		<App 
		onRequestRobots={mockOnRequestRobots}
		robots={[]}
		searchField=""
		isPending={false}
		/>
		);
	expect(mockOnRequestRobots).toHaveBeenCalled();
})

jest.mock('../components/CardList', () => ({ robots }) => (
	<div> 
	{robots.map(r => (
		<div key={r.id}>{r.name}</div> 
		))}
	</div>
	));



test('renders only filtered robots based on searchField', () => {
	const robots = [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Jane' },
		{ id: 3, name: 'Alice' }
	];

	render(
		<App 
		robots={robots}
		searchField="ja"
		isPending={false}
		onSearchChange={() => {}}
		onRequestRobots={() => {}}
		/>
		);

	expect(screen.getByText('Jane')).toBeInTheDocument();

	expect(screen.queryByText('John')).toBeNull();
	expect(screen.queryByText('Alice')).toBeNull();
});

test('shows loading when isPending is true', () => {
	render(
		<App 
		isPending={true}
		robots={[]}
		searchField=""
		onSearchChange={() => {}}
		onRequestRobots={() => {}}
		/> 
		);

	expect(screen.getByText('Loading...')).toBeInTheDocument();
})