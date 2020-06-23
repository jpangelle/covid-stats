interface USStateData {
  cases: {
    casesDisplay: string;
    casesNum: number;
  };
  casesPerCapita: number;
  deaths: {
    deathsDisplay: string;
    deathsNum: number;
  };
  deathsPerCapita: number;
  id: string;
  population: {
    populationDisplay: string;
    populationNum: number;
  };
  state: string;
}

type USStateDataArray = USStateData[];

interface ReduxState {
  column: {
    sortedBy: 'asc' | 'desc';
    sortedColumn: string;
  };
  data: {
    error?: Error;
    loading: boolean;
    stateData: USStateDataArray;
  };
}
