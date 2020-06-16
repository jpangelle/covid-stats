/* eslint-disable func-names */
import axios from 'axios';
import cheerio from 'cheerio';
import numeral from 'numeral';
import { v4 as uuid } from 'uuid';

const selectors = {
  stateNodes: '#usa_table_countries_today tbody tr td:first-child',
  casesNodes: '#usa_table_countries_today tbody tr td:nth-child(2)',
  deathsNodes: '#usa_table_countries_today tbody tr td:nth-child(4)',
};

const trimAndRemoveCommas = str => {
  return str.trim().replace(/,/g, '');
};

const getNodeData = ($, selector) => {
  const nodes = $(selector);

  return nodes
    .map(function () {
      return trimAndRemoveCommas($(this).text());
    })
    .get();
};

const organizeData = (states, populationDataClean, stateCases, stateDeaths) =>
  states.reduce((stateData, state, index) => {
    const population = populationDataClean[state.toLowerCase()];
    if (population) {
      const casesNum = parseInt(stateCases[index].replace(/,/g, ''), 10);
      const deathsNum = parseInt(stateDeaths[index].replace(/,/g, ''), 10);
      const casesPerCapita = Number((casesNum / population).toFixed(5));
      const deathsPerCapita = Number((deathsNum / population).toFixed(5));

      stateData.push({
        id: uuid(),
        state,
        cases: {
          casesDisplay: numeral(casesNum).format('0,0'),
          casesNum,
        },
        deaths: {
          deathsDisplay: numeral(deathsNum).format('0,0'),
          deathsNum,
        },
        population: {
          populationDisplay: numeral(population).format('0,0'),
          populationNum: population,
        },
        casesPerCapita,
        deathsPerCapita,
      });
    }
    return stateData;
  }, []);

export default async (req, res) => {
  try {
    const { data: casesData } = await axios(
      'https://www.worldometers.info/coronavirus/country/us/',
    );

    const { data: populationData } = await axios(
      'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest',
    );

    const populationDataClean = populationData.data.reduce((acc, cur) => {
      acc[cur.State.toLowerCase()] = cur.Population;
      return acc;
    }, {});

    const $ = cheerio.load(casesData);

    const states = getNodeData($, selectors.stateNodes);
    const stateCases = getNodeData($, selectors.casesNodes);
    const stateDeaths = getNodeData($, selectors.deathsNodes);

    const data = organizeData(
      states,
      populationDataClean,
      stateCases,
      stateDeaths,
    );

    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
