import React from 'react';
import { render } from '@testing-library/react';
import { TableBody } from './TableBody';

describe('Covid Table Body', () => {
  it('should render a row', () => {
    const props = {
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
    };

    const { container } = render(
      <table>
        <TableBody {...props} />
      </table>,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <table>
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
      </div>
    `);
  });
});
