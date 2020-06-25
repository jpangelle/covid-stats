import React from 'react';
import { render } from '@testing-library/react';
import { TableHeaderContents } from './TableHeaderContents';

describe('Covid Table Header Contents', () => {
  it('should render the header contents with asc sort icon', () => {
    const props = {
      columnDisplayName: 'Population',
      columnName: 'population',
      sortedBy: 'asc',
      sortedColumn: 'population',
    };

    const { getByTestId, getByText } = render(
      <TableHeaderContents {...props} />,
    );

    const populationHeader = getByText('Population');
    expect(populationHeader).toBeInTheDocument();

    const sortIcon = getByTestId('sort-icon');
    expect(sortIcon).toBeInTheDocument();
  });

  it('should render the header contents with desc sort icon', () => {
    const props = {
      columnDisplayName: 'Population',
      columnName: 'population',
      sortedBy: 'desc',
      sortedColumn: 'population',
    };

    const { getByTestId, getByText } = render(
      <TableHeaderContents {...props} />,
    );

    const populationHeader = getByText('Population');
    expect(populationHeader).toBeInTheDocument();

    const sortIcon = getByTestId('sort-icon');
    expect(sortIcon).toBeInTheDocument();
  });

  it('should render the header contents with no sort icon', () => {
    const props = {
      columnDisplayName: 'Population',
      columnName: 'population',
      sortedBy: 'asc',
      sortedColumn: 'state',
    };

    const { getByText, queryByTestId } = render(
      <TableHeaderContents {...props} />,
    );

    const populationHeader = getByText('Population');
    expect(populationHeader).toBeInTheDocument();

    const sortIcon = queryByTestId('sort-icon');
    expect(sortIcon).not.toBeInTheDocument();
  });
});
