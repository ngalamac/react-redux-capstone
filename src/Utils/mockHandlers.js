import { rest } from 'msw';

export const handlers = [
  rest.get(/air_pollution/, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      aqi: 1,
      components: {
        co: 171.9,
        nh3: 0.65,
        no: 0.01,
        no2: 0.07,
        o3: 11.98,
        pm2_5: 3.06,
        pm10: 3.17,
        so2: 0.05,
      },
    }),
  )),
];

export const countriesTestHandlers = [
  rest.get(/restcountries/i, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        altSpelling: 'PE',
        area: 1285216,
        latitude: -10,
        longitude: -76,
        name: 'Peru',
        population: 32971846,
        region: 'Americas',
      },
      {
        altSpelling: 'GL',
        area: 2166086,
        latitude: 72,
        longitude: -40,
        name: 'Greenland',
        population: 56367,
        region: 'Americas',
      },
    ]),
  )),
];
