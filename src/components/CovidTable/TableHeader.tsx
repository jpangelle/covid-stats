import React from 'react';
import { Table } from 'semantic-ui-react';
import { HEADERS } from '../../constants';
import { TableHeaderContents } from './TableHeaderContents';

const { Header, HeaderCell, Row } = Table;

interface Props {
  sortedBy: string;
  sortedColumn: string;
  updateSortColumn: UpdateSortColumn;
}

export const TableHeader = ({
  sortedBy,
  sortedColumn,
  updateSortColumn,
}: Props) => {
  const sortColumn = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSortColumn(event.target.dataset.columnName);
  };

  return (
    <Header>
      <Row className="table-headers">
        {HEADERS.map(({ columnDisplayName, columnName }) => (
          <HeaderCell
            data-column-name={columnName}
            key={columnName}
            onClick={sortColumn}
          >
            <TableHeaderContents
              columnDisplayName={columnDisplayName}
              columnName={columnName}
              sortedBy={sortedBy}
              sortedColumn={sortedColumn}
            />
          </HeaderCell>
        ))}
      </Row>
    </Header>
  );
};
