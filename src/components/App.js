import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CovidTable } from './CovidTable';
import { getData, updateSortOption } from '../actions/index';
import getSortedColumn from '../selectors';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const App = ({ data, getData, sortOption, sortOrder, updateSortOption }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="App">
      <div className="header">
        Covid State Statistics{' '}
        <a href="https://github.com/jpangelle/covid-stats">
          <img src="https://i.imgur.com/uOxQVYw.png" alt="github logo" />
        </a>
      </div>
      <div className="container">
        {!data.length ? (
          <div className="ui active large text loader">Loading</div>
        ) : (
          <>
            <CovidTable
              data={data}
              sortOption={sortOption}
              sortOrder={sortOrder}
              updateSortOption={updateSortOption}
            />
            <a href="https://www.worldometers.info/coronavirus/country/us/">
              Source
            </a>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  data: getSortedColumn(state),
  sortOption: state.data.sortOption,
  sortOrder: state.data.sortOrder,
});

const mapDispatchToProps = {
  getData,
  updateSortOption,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
