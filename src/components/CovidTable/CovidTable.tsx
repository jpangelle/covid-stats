import React from 'react';
import { Table } from 'semantic-ui-react';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';

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
}: Props) => (
  <Table className="celled striped unstackable">
    <TableHeader
      sortedBy={sortedBy}
      sortedColumn={sortedColumn}
      updateSortColumn={updateSortColumn}
    />
    <TableBody stateData={stateData} />
  </Table>
);
