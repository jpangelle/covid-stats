import axios from 'axios';
import cheerio from 'cheerio';
import numeral from 'numeral';
import { v4 as uuid } from 'uuid';

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

    const stateNodes = $('#usa_table_countries_today tbody tr td:first-child');

    const states = [];

    const trimAndRemoveCommas = str => {
      return str.trim().replace(/,/g, '');
    };

    stateNodes.each(function () {
      states.push($(this).text().trim());
    });

    const casesNodes = $('#usa_table_countries_today tbody tr td:nth-child(2)');

    const stateCases = [];

    casesNodes.each(function () {
      stateCases.push(trimAndRemoveCommas($(this).text()));
    });

    const deathsNodes = $(
      '#usa_table_countries_today tbody tr td:nth-child(4)',
    );

    const stateDeaths = [];

    deathsNodes.each(function () {
      stateDeaths.push(trimAndRemoveCommas($(this).text()));
    });

    const data = states.reduce((stateData, state, index) => {
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

    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
