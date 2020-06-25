import { sortColumn } from '.';

describe('sortColumn', () => {
  const stateData = [
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
  ];

  describe('population', () => {
    it('should sort ascending population', () => {
      const state: ReduxState = {
        column: {
          sortedBy: 'asc',
          sortedColumn: 'population',
        },
        data: {
          error: undefined,
          loading: false,
          stateData,
        },
      };

      const expected = [
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
      ];

      const actual = sortColumn(state);

      expect(actual).toEqual(expected);
    });

    it('should sort descending population', () => {
      const state: ReduxState = {
        column: {
          sortedBy: 'desc',
          sortedColumn: 'population',
        },
        data: {
          error: undefined,
          loading: false,
          stateData,
        },
      };

      const expected = [
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
      ];

      const actual = sortColumn(state);

      expect(actual).toEqual(expected);
    });
  });

  describe('cases', () => {
    it('should sort ascending cases', () => {
      const state: ReduxState = {
        column: {
          sortedBy: 'asc',
          sortedColumn: 'cases',
        },
        data: {
          error: undefined,
          loading: false,
          stateData,
        },
      };

      const expected = [
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
      ];

      const actual = sortColumn(state);

      expect(actual).toEqual(expected);
    });

    it('should sort descending cases', () => {
      const state: ReduxState = {
        column: {
          sortedBy: 'desc',
          sortedColumn: 'cases',
        },
        data: {
          error: undefined,
          loading: false,
          stateData,
        },
      };

      const expected = [
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
      ];

      const actual = sortColumn(state);

      expect(actual).toEqual(expected);
    });
  });

  describe('deaths', () => {
    it('should sort ascending deaths', () => {
      const state: ReduxState = {
        column: {
          sortedBy: 'asc',
          sortedColumn: 'deaths',
        },
        data: {
          error: undefined,
          loading: false,
          stateData,
        },
      };

      const expected = [
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
      ];

      const actual = sortColumn(state);

      expect(actual).toEqual(expected);
    });

    it('should sort descending deaths', () => {
      const state: ReduxState = {
        column: {
          sortedBy: 'desc',
          sortedColumn: 'deaths',
        },
        data: {
          error: undefined,
          loading: false,
          stateData,
        },
      };

      const expected = [
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
      ];

      const actual = sortColumn(state);

      expect(actual).toEqual(expected);
    });
  });

  describe('state', () => {
    it('should sort ascending state', () => {
      const state: ReduxState = {
        column: {
          sortedBy: 'asc',
          sortedColumn: 'state',
        },
        data: {
          error: undefined,
          loading: false,
          stateData,
        },
      };

      const expected = [
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
      ];

      const actual = sortColumn(state);

      expect(actual).toEqual(expected);
    });

    it('should sort descending state', () => {
      const state: ReduxState = {
        column: {
          sortedBy: 'desc',
          sortedColumn: 'state',
        },
        data: {
          error: undefined,
          loading: false,
          stateData,
        },
      };

      const expected = [
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
      ];

      const actual = sortColumn(state);

      expect(actual).toEqual(expected);
    });
  });

  describe('cases per capita', () => {
    it('should sort ascending cases per capita', () => {
      const state: ReduxState = {
        column: {
          sortedBy: 'asc',
          sortedColumn: 'casesPerCapita',
        },
        data: {
          error: undefined,
          loading: false,
          stateData,
        },
      };

      const expected = [
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
      ];

      const actual = sortColumn(state);

      expect(actual).toEqual(expected);
    });

    it('should sort descending cases per capita', () => {
      const state: ReduxState = {
        column: {
          sortedBy: 'desc',
          sortedColumn: 'casesPerCapita',
        },
        data: {
          error: undefined,
          loading: false,
          stateData,
        },
      };

      const expected = [
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
      ];

      const actual = sortColumn(state);

      expect(actual).toEqual(expected);
    });
  });

  describe('deaths per capita', () => {
    it('should sort ascending deaths per capita', () => {
      const state: ReduxState = {
        column: {
          sortedBy: 'asc',
          sortedColumn: 'deathsPerCapita',
        },
        data: {
          error: undefined,
          loading: false,
          stateData,
        },
      };

      const expected = [
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
      ];

      const actual = sortColumn(state);

      expect(actual).toEqual(expected);
    });

    it('should sort descending deaths per capita', () => {
      const state: ReduxState = {
        column: {
          sortedBy: 'desc',
          sortedColumn: 'deathsPerCapita',
        },
        data: {
          error: undefined,
          loading: false,
          stateData,
        },
      };

      const expected = [
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
      ];

      const actual = sortColumn(state);

      expect(actual).toEqual(expected);
    });
  });
});
