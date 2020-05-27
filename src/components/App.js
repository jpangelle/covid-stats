import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CovidTable } from './CovidTable';
import { getStateData, updateSortColumn } from '../actions/index';
import { sortColumn } from '../selectors';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const App = ({
  getStateData,
  sortedBy,
  sortedColumn,
  stateData,
  updateSortColumn,
}) => {
  useEffect(() => {
    getStateData();
  }, [getStateData]);

  return (
    <div className="App">
      <div className="header">
        Covid State Statistics{' '}
        <a href="https://github.com/angelle-sw/covid-stats">
          <img src="https://i.imgur.com/uOxQVYw.png" alt="github logo" />
        </a>
      </div>
      <div className="container">
        {stateData.length ? (
          <>
            <CovidTable
              sortedBy={sortedBy}
              sortedColumn={sortedColumn}
              updateSortColumn={updateSortColumn}
              stateData={stateData}
            />
            <div className="sources">
              <a href="https://datausa.io/">Population Source</a>
              <span className="source-divider">|</span>
              <a href="https://www.worldometers.info/coronavirus/country/us/">
                COVID Source
              </a>
            </div>
          </>
        ) : (
          <div className="ui active large text loader">Loading</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { sortedBy, sortedColumn } = state.data;
  return {
    sortedBy,
    sortedColumn,
    stateData: sortColumn(state),
  };
};

export default connect(mapStateToProps, { getStateData, updateSortColumn })(
  App,
);
