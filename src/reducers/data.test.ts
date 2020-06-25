import { dataReducer } from './data';
import {
  GET_STATE_DATA_FAILURE,
  GET_STATE_DATA_REQUEST,
  GET_STATE_DATA_SUCCESS,
} from '../constants';

describe('Data reducer', () => {
  const initialState = {
    error: undefined,
    loading: true,
    stateData: [],
  };

  it('should return loading state when requesting data', () => {
    const expected = { error: undefined, loading: true, stateData: [] };
    const actual = dataReducer(initialState, {
      type: GET_STATE_DATA_REQUEST,
    });

    expect(actual).toEqual(expected);
  });

  it('should return error state when data request fails', () => {
    const error = new Error();
    const expected = { error, loading: false, stateData: [] };
    const actual = dataReducer(initialState, {
      payload: error,
      type: GET_STATE_DATA_FAILURE,
    });

    expect(actual).toEqual(expected);
  });

  it('should return data state when requesting data suceeds', () => {
    const expected = {
      error: undefined,
      loading: false,
      stateData: [
        {
          cases: {
            casesDisplay: '100,000',
            casesNum: 100000,
          },
          casesPerCapita: 1000,
          deaths: {
            deathsDisplay: '10,000',
            deathsNum: 10000,
          },
          deathsPerCapita: 100,
          id: '2',
          population: {
            populationDisplay: '1,000',
            populationNum: 1000,
          },
          state: 'New York',
        },
      ],
    };
    const actual = dataReducer(initialState, {
      payload: [
        {
          cases: {
            casesDisplay: '100,000',
            casesNum: 100000,
          },
          casesPerCapita: 1000,
          deaths: {
            deathsDisplay: '10,000',
            deathsNum: 10000,
          },
          deathsPerCapita: 100,
          id: '2',
          population: {
            populationDisplay: '1,000',
            populationNum: 1000,
          },
          state: 'New York',
        },
      ],
      type: GET_STATE_DATA_SUCCESS,
    });

    expect(actual).toEqual(expected);
  });

  it('should return current state if action type is invalid', () => {
    const expected = initialState;
    const actual = dataReducer(initialState, {
      payload: [],
      type: 'INVALID_ACTION_TYPE',
    });

    expect(actual).toEqual(expected);
  });
});
