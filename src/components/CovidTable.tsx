import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import { HEADERS } from '../constants';

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
  const { Body, Cell, Header, HeaderCell, Row } = Table;

  const sortColumn = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSortColumn(event.target.dataset.columnName);
  };

  const computeIconName = () => {
    if (sortedBy === 'asc') {
      return 'chevron up';
    }
    return 'chevron down';
  };

  return (
    <Table className="celled striped unstackable">
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
      <Body>
        {stateData.map(
          (
            {
              cases,
              casesPerCapita,
              deaths,
              deathsPerCapita,
              id,
              population,
              state,
            },
            index,
          ) => (
            <Row key={id}>
              <Cell>{index + 1}</Cell>
              <Cell>{state}</Cell>
              <Cell>{population.populationDisplay}</Cell>
              <Cell>{cases.casesDisplay}</Cell>
              <Cell>{casesPerCapita}</Cell>
              <Cell>{deaths.deathsDisplay}</Cell>
              <Cell>{deathsPerCapita}</Cell>
            </Row>
          ),
        )}
      </Body>
    </Table>
  );
};
