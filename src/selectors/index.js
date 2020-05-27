import { createSelector } from 'reselect';
import { orderBy } from 'lodash';

const getSortedBy = state => state.data.sortedBy;
const getSortedColumn = state => state.data.sortedColumn;
const getStateData = state => state.data.stateData;

const sortColumn = createSelector(
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

export { sortColumn };
