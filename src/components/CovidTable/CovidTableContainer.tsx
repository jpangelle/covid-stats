import React from 'react';
import { Icon } from 'semantic-ui-react';
import { CovidTable } from './CovidTable';

interface Props {
  error: Error;
  loading: boolean;
  sortedBy: string;
  sortedColumn: string;
  stateData: USStateDataArray;
  updateSortColumn: UpdateSortColumn;
}

export const CovidTableContainer = ({
  error,
  loading,
  sortedBy,
  sortedColumn,
  stateData,
  updateSortColumn,
}: Props) => {
  if (loading) {
    return <div className="ui active large text loader" />;
  }

  if (error) {
    return (
      <div className="error">
        <Icon name="exclamation circle" />
        <div className="error-text">Something went wrong.</div>
        <div className="error-text">Please refresh.</div>
      </div>
    );
  }

  return (
    <div className="covid-table">
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
    </div>
  );
};
