import { createSelector } from 'reselect';
import { orderBy } from 'lodash';

const getSortedBy = (state: ReduxState) => state.column.sortedBy;
const getSortedColumn = (state: ReduxState) => state.column.sortedColumn;
const getStateData = (state: ReduxState) => state.data.stateData;

export const sortColumn = createSelector(
  [getSortedBy, getSortedColumn, getStateData],
  (sortedBy, sortedColumn, stateData) => {
    if (sortedColumn === 'cases') {
      return orderBy(stateData, ['cases.casesNum'], [sortedBy]);
    }
    if (sortedColumn === 'deaths') {
      return orderBy(stateData, ['deaths.deathsNum'], [sortedBy]);
    }
    if (sortedColumn === 'population') {
      return orderBy(stateData, ['population.populationNum'], [sortedBy]);
    }
    return orderBy(stateData, [sortedColumn], [sortedBy]);
  },
);
