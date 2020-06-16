const GET_STATE_DATA_ASYNC = 'GET_STATE_DATA_ASYNC';
const GET_STATE_DATA_ERROR = 'GET_STATE_DATA_ERROR';
const GET_STATE_DATA_INIT = 'GET_STATE_DATA_INIT';
const GET_STATE_DATA_SUCCESS = 'GET_STATE_DATA_SUCCESS';
const UPDATE_COLUMN_SORT = 'UPDATE_COLUMN_SORT';

const HEADERS = [
  { columnDisplayName: 'Rank', columnName: 'rank' },
  { columnDisplayName: 'State', columnName: 'state' },
  { columnDisplayName: 'Population', columnName: 'population' },
  { columnDisplayName: 'Cases', columnName: 'cases' },
  { columnDisplayName: 'Cases Per Capita', columnName: 'casesPerCapita' },
  { columnDisplayName: 'Deaths', columnName: 'deaths' },
  { columnDisplayName: 'Deaths Per Capita', columnName: 'deathsPerCapita' },
];

export {
  GET_STATE_DATA_ASYNC,
  GET_STATE_DATA_ERROR,
  GET_STATE_DATA_INIT,
  GET_STATE_DATA_SUCCESS,
  HEADERS,
  UPDATE_COLUMN_SORT,
};
