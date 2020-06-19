const GET_STATE_DATA_FAILURE = 'GET_STATE_DATA_FAILURE';
const GET_STATE_DATA_REQUEST = 'GET_STATE_DATA_REQUEST';
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
  GET_STATE_DATA_FAILURE,
  GET_STATE_DATA_REQUEST,
  GET_STATE_DATA_SUCCESS,
  HEADERS,
  UPDATE_COLUMN_SORT,
};
