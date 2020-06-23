import React from 'react';
import { render } from '@testing-library/react';
import { TableContainer } from './TableContainer';

describe('Covid Table Container', () => {
  it('should render an error', () => {
    const props = {
      error: new Error(),
      loading: false,
      sortedBy: 'asc',
      sortedColumn: 'state',
      stateData: [],
      updateSortColumn: jest.fn(),
    };

    const { getByText } = render(<TableContainer {...props} />);

    const errorText = getByText(/Something went wrong\./);

    expect(errorText).toBeInTheDocument();
  });

  it('should render a loading screen', () => {
    const props = {
      error: undefined,
      loading: true,
      sortedBy: 'asc',
      sortedColumn: 'state',
      stateData: [],
      updateSortColumn: jest.fn(),
    };

    const { container } = render(<TableContainer {...props} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="ui active large text loader"
        />
      </div>
    `);
  });

  it('should render a table', () => {
    const props = {
      error: undefined,
      loading: false,
      sortedBy: 'asc',
      sortedColumn: 'state',
      stateData: [
        {
          cases: {
            casesDisplay: '10,000',
            casesNum: 10000,
          },
          casesPerCapita: 10000,
          deaths: {
            deathsDisplay: '1,000',
            deathsNum: 1000,
          },
          deathsPerCapita: 1000,
          id: '1',
          population: {
            populationDisplay: '100,000',
            populationNum: 100000,
          },
          state: 'Iowa',
        },
        {
          cases: {
            casesDisplay: '100,000',
            casesNum: 100000,
          },
          casesPerCapita: 1000,
          deaths: {
            deathsDisplay: '10,000',
            deathsNum: 10000,
          },
          deathsPerCapita: 100,
          id: '2',
          population: {
            populationDisplay: '1,000',
            populationNum: 1000,
          },
          state: 'New York',
        },
      ],
      updateSortColumn: jest.fn(),
    };

    const { container } = render(<TableContainer {...props} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="covid-table"
        >
          <table
            class="ui table celled striped unstackable"
          >
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
            <tbody
              class=""
            >
              <tr
                class=""
              >
                <td
                  class=""
                >
                  1
                </td>
                <td
                  class=""
                >
                  Iowa
                </td>
                <td
                  class=""
                >
                  100,000
                </td>
                <td
                  class=""
                >
                  10,000
                </td>
                <td
                  class=""
                >
                  10000
                </td>
                <td
                  class=""
                >
                  1,000
                </td>
                <td
                  class=""
                >
                  1000
                </td>
              </tr>
              <tr
                class=""
              >
                <td
                  class=""
                >
                  2
                </td>
                <td
                  class=""
                >
                  New York
                </td>
                <td
                  class=""
                >
                  1,000
                </td>
                <td
                  class=""
                >
                  100,000
                </td>
                <td
                  class=""
                >
                  1000
                </td>
                <td
                  class=""
                >
                  10,000
                </td>
                <td
                  class=""
                >
                  100
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="sources"
          >
            <a
              href="https://datausa.io/"
            >
              Population Source
            </a>
            <span
              class="source-divider"
            >
              |
            </span>
            <a
              href="https://www.worldometers.info/coronavirus/country/us/"
            >
              COVID Source
            </a>
          </div>
        </div>
      </div>
    `);
  });
});
