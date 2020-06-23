import React from 'react';
import { Table } from 'semantic-ui-react';
import { TableDataRow } from './TableDataRow';

const { Body } = Table;

interface Props {
  stateData: USStateDataArray;
}

export const TableBody = ({ stateData }: Props) => (
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
        <TableDataRow
          casesDisplay={cases.casesDisplay}
          casesPerCapita={casesPerCapita}
          deathsDisplay={deaths.deathsDisplay}
          deathsPerCapita={deathsPerCapita}
          key={id}
          populationDisplay={population.populationDisplay}
          state={state}
          rank={index + 1}
        />
      ),
    )}
  </Body>
);
