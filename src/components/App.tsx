import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CovidTableContainer } from './CovidTable/CovidTableContainer';
import { getStateData, updateSortColumn } from '../actions/index';
import { sortColumn } from '../selectors';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

interface Props {
  error: Error;
  getStateData: () => void;
  loading: boolean;
  sortedBy: string;
  sortedColumn: string;
  stateData: USStateDataArray;
  updateSortColumn: UpdateSortColumn;
}

const App = ({
  error,
  getStateData,
  loading,
  sortedBy,
  sortedColumn,
  stateData,
  updateSortColumn,
}: Props) => {
  useEffect(() => {
    getStateData();
  }, [getStateData]);

  return (
    <div className="App">
      <div className="header">
        Covid State Statistics
        <a href="https://github.com/jpangelle/covid-stats">
          <img src="https://i.imgur.com/uOxQVYw.png" alt="github logo" />
        </a>
      </div>
      <div className="container">
        <CovidTableContainer
          error={error}
          loading={loading}
          sortedBy={sortedBy}
          sortedColumn={sortedColumn}
          stateData={stateData}
          updateSortColumn={updateSortColumn}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: ReduxState) => {
  const { sortedBy, sortedColumn } = state.column;
  const { error, loading } = state.data;
  return {
    error,
    loading,
    sortedBy,
    sortedColumn,
    stateData: sortColumn(state),
  };
};

export default connect(mapStateToProps, { getStateData, updateSortColumn })(
  App,
);
