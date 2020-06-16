import React from 'react';
import { Table } from 'semantic-ui-react';
import { CovidTableHeader } from './CovidTableHeader';
import { CovidTableBody } from './CovidTableBody';

interface Props {
  sortedBy: string;
  sortedColumn: string;
  stateData: USStateDataArray;
  updateSortColumn: UpdateSortColumn;
}

export const CovidTable = ({
  sortedBy,
  sortedColumn,
  stateData,
  updateSortColumn,
}: Props) => {
  return (
    <Table className="celled striped unstackable">
      <CovidTableHeader
        sortedBy={sortedBy}
        sortedColumn={sortedColumn}
        updateSortColumn={updateSortColumn}
      />
      <CovidTableBody stateData={stateData} />
    </Table>
  );
};
