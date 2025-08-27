import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import {
  searchRobots,
  requestRobots,
  rootReducer
} from './reducers';

describe('searchRobots reducer', () => {
  const initialStateSearch = { searchField: '' };

  it('should handle CHANGE_SEARCH_FIELD', () => {
    const action = {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    };
    expect(searchRobots(initialStateSearch, action)).toEqual({ searchField: 'abc' });
  });

  it('should use default state and action when called with undefined', () => {
  expect(searchRobots(undefined, undefined)).toEqual({ searchField: '' });
});
});



describe('requestRobots reducer', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
  };


  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    const mockRobots = [{ id: 1, name: 'Robo' }];
    const action = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: mockRobots
    };
    const expectedState = {
      ...initialStateRobots,
      robots: mockRobots,
      isPending: false
    };
    expect(requestRobots(initialStateRobots, action)).toEqual(expectedState);
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    const mockError = 'Failed to fetch';
    const action = {
      type: REQUEST_ROBOTS_FAILED,
      payload: mockError
    };
    const expectedState = {
      ...initialStateRobots,
      error: mockError,
      isPending: false
    };
    expect(requestRobots(initialStateRobots, action)).toEqual(expectedState);
  });


  it('should use default state and action when called with undefined', () => {
  expect(requestRobots(undefined, undefined)).toEqual({
    isPending: false,
    robots: [],
    error: ''
  });
});
  it('should handle REQUEST_ROBOTS_PENDING', () => {
  const action = { type: REQUEST_ROBOTS_PENDING };
  const expectedState = {
    ...initialStateRobots,
    isPending: true
  };
  expect(requestRobots(initialStateRobots, action)).toEqual(expectedState);
});

});



