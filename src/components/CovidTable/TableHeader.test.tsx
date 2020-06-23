import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { TableHeader } from './TableHeader';

describe('Covid Table Header', () => {
  it('should render the header', () => {
    const props = {
      sortedBy: 'asc',
      sortedColumn: 'state',
      updateSortColumn: jest.fn(),
    };

    const { container } = render(
      <table>
        <TableHeader {...props} />
      </table>,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <table>
          <thead
            class=""
          >
            <tr
              class="table-headers"
            >
              <th
                class=""
                data-column-name="rank"
              >
                Rank
                 
              </th>
              <th
                class=""
                data-column-name="state"
              >
                State
                 
                <i
                  aria-hidden="true"
                  class="chevron up icon"
                  data-column-name="state"
                  data-testid="sort-icon"
                />
              </th>
              <th
                class=""
                data-column-name="population"
              >
                Population
                 
              </th>
              <th
                class=""
                data-column-name="cases"
              >
                Cases
                 
              </th>
              <th
                class=""
                data-column-name="casesPerCapita"
              >
                Cases Per Capita
                 
              </th>
              <th
                class=""
                data-column-name="deaths"
              >
                Deaths
                 
              </th>
              <th
                class=""
                data-column-name="deathsPerCapita"
              >
                Deaths Per Capita
                 
              </th>
            </tr>
          </thead>
        </table>
      </div>
    `);
  });

  it('should sort column when different column is clicked', () => {
    const updateSortColumn = jest.fn();

    const props = {
      sortedBy: 'asc',
      sortedColumn: 'state',
      updateSortColumn,
    };

    const { getByText } = render(
      <table>
        <TableHeader {...props} />
      </table>,
    );

    const populationHeader = getByText('Population');
    expect(populationHeader).toBeInTheDocument();

    fireEvent.click(populationHeader);

    expect(updateSortColumn).toHaveBeenCalledWith('population');
  });
});
