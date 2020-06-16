import React from 'react';
import { Table } from 'semantic-ui-react';

const { Cell, Row } = Table;

interface Props {
  casesDisplay: string;
  casesPerCapita: number;
  deathsDisplay: string;
  deathsPerCapita: number;
  populationDisplay: string;
  state: string;
  rank: number;
}

export const CovidTableRow = ({
  casesDisplay,
  casesPerCapita,
  deathsDisplay,
  deathsPerCapita,
  populationDisplay,
  state,
  rank,
}: Props) => {
  return (
    <Row>
      <Cell>{rank}</Cell>
      <Cell>{state}</Cell>
      <Cell>{populationDisplay}</Cell>
      <Cell>{casesDisplay}</Cell>
      <Cell>{casesPerCapita}</Cell>
      <Cell>{deathsDisplay}</Cell>
      <Cell>{deathsPerCapita}</Cell>
    </Row>
  );
};
