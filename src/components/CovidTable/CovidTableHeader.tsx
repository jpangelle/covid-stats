import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import { HEADERS } from '../../constants';

const { Header, HeaderCell, Row } = Table;

interface Props {
  sortedBy: string;
  sortedColumn: string;
  updateSortColumn: UpdateSortColumn;
}

export const CovidTableHeader = ({
  sortedBy,
  sortedColumn,
  updateSortColumn,
}: Props) => {
  const computeIconName = () => {
    if (sortedBy === 'asc') {
      return 'chevron up';
    }
    return 'chevron down';
  };

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
            {columnDisplayName}{' '}
            {sortedColumn === columnName && (
              <Icon data-column-name={columnName} name={computeIconName()} />
            )}
          </HeaderCell>
        ))}
      </Row>
    </Header>
  );
};
