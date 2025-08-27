import { combineReducers } from 'redux';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

export interface SearchState {
  searchField: string;
}

export interface RobotsState {
  isPending: boolean;
  robots: any[];
  error: string;
}

const initialSearchState: SearchState = {
  searchField: '',
};

const searchRobots = (state = initialSearchState, action: any): SearchState => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialRobotsState: RobotsState = {
  isPending: false,
  robots: [],
  error: '',
};

const robotsReducer = (state = initialRobotsState, action: any): RobotsState => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { robots: action.payload, isPending: false, error: '' };
    case REQUEST_ROBOTS_FAILED:
      return { robots: [], isPending: false, error: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  searchRobots,
  robotsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
