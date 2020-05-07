import React from 'react';
import { Icon, Table } from 'semantic-ui-react';

export const CovidTable = ({
  data,
  sortOption,
  sortOrder,
  updateSortOption,
}) => {
  const { Body, Cell, Header, HeaderCell, Row } = Table;

  const sortColumn = event => {
    updateSortOption(event.target.dataset.columnName);
  };

  const Headers = [
    { columnDisplayName: 'Rank', columnName: 'rank' },
    { columnDisplayName: 'State', columnName: 'state' },
    { columnDisplayName: 'Population', columnName: 'population' },
    { columnDisplayName: 'Cases', columnName: 'cases' },
    { columnDisplayName: 'Cases Per Capita', columnName: 'casesPerCapita' },
    { columnDisplayName: 'Deaths', columnName: 'deaths' },
    { columnDisplayName: 'Deaths Per Capita', columnName: 'deathsPerCapita' },
  ];

  return (
    <Table className="celled striped unstackable">
      <Header>
        <Row className="table-headers">
          {Headers.map(({ columnDisplayName, columnName }) => (
            <HeaderCell
              data-column-name={columnName}
              key={columnName}
              onClick={sortColumn}
            >
              {columnDisplayName}{' '}
              {sortOption === columnName && (
                <Icon
                  data-column-name={columnName}
                  name={`chevron ${sortOrder === 'asc' ? 'up' : 'down'}`}
                />
              )}
            </HeaderCell>
          ))}
        </Row>
      </Header>
      <Body>
        {data.map(
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
