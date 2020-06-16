import React from 'react';
import { Table } from 'semantic-ui-react';
import { CovidTableRow } from './CovidTableDataRow';

const { Body } = Table;

interface Props {
  stateData: USStateDataArray;
}

export const CovidTableBody = ({ stateData }: Props) => {
  return (
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
          <CovidTableRow
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
};
