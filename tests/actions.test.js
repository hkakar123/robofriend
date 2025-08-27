import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

import fetchMock from 'jest-fetch-mock';
import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';
import { requestRobots } from './actions';

beforeAll(() => {
  fetchMock.enableMocks();
});

beforeEach(() => {
	fetchMock.resetMocks();
	fetchMock.doMock();
})

afterEach(() => {
  fetchMock.resetMocks();
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


it('dispatches REQUEST_ROBOTS_PENDING and then REQUEST_ROBOTS_SUCCESS', () => {
  const mockData = [{ id: 1, name: 'John' }];
  fetchMock.mockResponseOnce(JSON.stringify(mockData));

  const expectedActions = [
    { type: REQUEST_ROBOTS_PENDING },
    { type: REQUEST_ROBOTS_SUCCESS, payload: mockData }
  ];

  const store = mockStore({});

  return store.dispatch(requestRobots()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

it('dispatches REQUEST_ROBOTS_PENDING and then REQUEST_ROBOTS_FAILED on error', () => {
  fetchMock.mockRejectOnce(new Error('Network error'));

  const expectedActions = [
    { type: REQUEST_ROBOTS_PENDING },
    { type: REQUEST_ROBOTS_FAILED, payload: new Error('Network error') }
  ];

  const store = mockStore({});

  return store.dispatch(requestRobots()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
