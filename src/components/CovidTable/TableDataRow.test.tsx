import React from 'react';
import { render } from '@testing-library/react';
import { TableDataRow } from './TableDataRow';

describe('Covid Table Data Row', () => {
  it('should render a row', () => {
    const props = {
      casesDisplay: '10,000',
      casesPerCapita: 10000,
      deathsDisplay: '1,000',
      deathsPerCapita: 1000,
      populationDisplay: '100,000',
      state: 'New York',
      rank: 1,
    };

    const { container } = render(
      <table>
        <tbody>
          <TableDataRow {...props} />
        </tbody>
      </table>,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <table>
          <tbody>
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
                New York
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
          </tbody>
        </table>
      </div>
    `);
  });
});
