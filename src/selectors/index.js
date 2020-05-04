import { createSelector } from 'reselect';
import { orderBy } from 'lodash';

const getData = state => state.data.data;
const getColumnSort = state => state.data.sortOption;
const getsortOrder = state => state.data.sortOrder;

const getSortedColumn = createSelector(
  [getColumnSort, getData, getsortOrder],
  (sortOption, data, sortOrder) => {
    if (sortOption === 'cases') {
      return orderBy(data, ['cases.casesNum'], [sortOrder]);
    }
    if (sortOption === 'population') {
      return orderBy(data, ['population.populationNum'], [sortOrder]);
    }
    if (sortOption === 'deaths') {
      return orderBy(data, ['deaths.deathsNum'], [sortOrder]);
    }
    return orderBy(data, [sortOption], [sortOrder]);
  },
);

export default getSortedColumn;
