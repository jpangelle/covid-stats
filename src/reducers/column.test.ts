import { columnReducer } from './column';
import { UPDATE_COLUMN_SORT } from '../constants';

describe('Column reducer', () => {
  const initialState = {
    sortedBy: 'desc',
    sortedColumn: 'casesPerCapita',
  };

  it('should not change sortedColumn when sorted by rank', () => {
    const expected = { sortedBy: 'desc', sortedColumn: 'casesPerCapita' };
    const actual = columnReducer(initialState, {
      payload: {
        column: 'rank',
      },
      type: UPDATE_COLUMN_SORT,
    });

    expect(actual).toEqual(expected);
  });

  it('should change sortedColumn to population', () => {
    const expected = { sortedBy: 'desc', sortedColumn: 'population' };
    const actual = columnReducer(initialState, {
      payload: {
        column: 'population',
      },
      type: UPDATE_COLUMN_SORT,
    });

    expect(actual).toEqual(expected);
  });

  it('should toggle sortedBy if same column is sorted - asc', () => {
    const expected = { sortedBy: 'asc', sortedColumn: 'casesPerCapita' };
    const actual = columnReducer(initialState, {
      payload: {
        column: 'casesPerCapita',
      },
      type: UPDATE_COLUMN_SORT,
    });

    expect(actual).toEqual(expected);
  });

  it('should toggle sortedBy if same column is sorted - desc', () => {
    const expected = { sortedBy: 'desc', sortedColumn: 'casesPerCapita' };
    const actual = columnReducer(
      { ...initialState, sortedBy: 'asc' },
      {
        payload: {
          column: 'casesPerCapita',
        },
        type: UPDATE_COLUMN_SORT,
      },
    );

    expect(actual).toEqual(expected);
  });

  it('should return current state if action type is invalid', () => {
    const expected = initialState;
    const actual = columnReducer(initialState, {
      payload: {
        column: 'casesPerCapita',
      },
      type: 'INVALID_ACTION_TYPE',
    });

    expect(actual).toEqual(expected);
  });
});
