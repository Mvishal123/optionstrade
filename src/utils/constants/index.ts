import { StrikeData } from "../types";

export const TABLE_DATA: StrikeData[] = [
  {
    strike: 15000,
    call: {
      delta: 0.92,
      gamma: 0.01,
      vega: 0.58,
      theta: -1.52,
      oi_lakh: 42.3,
      ltp: 198.4,
    },
    put: {
      delta: -0.38,
      gamma: 0.35,
      vega: 2.88,
      theta: -0.99,
      oi_lakh: 5.2,
      ltp: 200.0,
    },
  },
  {
    strike: 15100,
    call: {
      delta: 0.23,
      gamma: 0.02,
      vega: 3.41,
      theta: -0.45,
      oi_lakh: 0.9,
      ltp: 15.2,
    },
    put: {
      delta: -0.75,
      gamma: 0.01,
      vega: 0.75,
      theta: -1.32,
      oi_lakh: 25.7,
      ltp: 345.1,
    },
  },
  {
    strike: 15200,
    call: {
      delta: 0.50,
      gamma: 0.10,
      vega: 1.80,
      theta: -0.95,
      oi_lakh: 32.8,
      ltp: 12.7,
    },
    put: {
      delta: -0.42,
      gamma: 0.15,
      vega: 1.96,
      theta: -1.48,
      oi_lakh: 16.3,
      ltp: 289.3,
    },
  },
  {
    strike: 15300,
    call: {
      delta: 0.85,
      gamma: 0.03,
      vega: 0.71,
      theta: -0.62,
      oi_lakh: 75.4,
      ltp: 322.0,
    },
    put: {
      delta: -0.21,
      gamma: 0.45,
      vega: 2.32,
      theta: -0.56,
      oi_lakh: 3.7,
      ltp: 50.1,
    },
  },
  {
    strike: 15400,
    call: {
      delta: 0.12,
      gamma: 0.35,
      vega: 1.95,
      theta: -0.85,
      oi_lakh: 1.2,
      ltp: 79.1,
    },
    put: {
      delta: -0.68,
      gamma: 0.08,
      vega: 1.60,
      theta: -1.25,
      oi_lakh: 45.8,
      ltp: 412.7,
    },
  },
  {
    strike: 15500,
    call: {
      delta: 0.39,
      gamma: 0.01,
      vega: 0.49,
      theta: -1.12,
      oi_lakh: 14.4,
      ltp: 98.0,
    },
    put: {
      delta: -0.52,
      gamma: 0.25,
      vega: 2.09,
      theta: -1.04,
      oi_lakh: 17.6,
      ltp: 340.5,
    },
  },
  {
    strike: 15600,
    call: {
      delta: 0.74,
      gamma: 0.005,
      vega: 0.38,
      theta: -1.45,
      oi_lakh: 65.1,
      ltp: 255.2,
    },
    put: {
      delta: -0.31,
      gamma: 0.07,
      vega: 0.91,
      theta: -0.55,
      oi_lakh: 5.3,
      ltp: 83.4,
    },
  },
  {
    strike: 15700,
    call: {
      delta: 0.26,
      gamma: 0.11,
      vega: 2.71,
      theta: -0.45,
      oi_lakh: 4.2,
      ltp: 26.5,
    },
    put: {
      delta: -0.57,
      gamma: 0.05,
      vega: 1.49,
      theta: -0.98,
      oi_lakh: 34.5,
      ltp: 275.1,
    },
  },
  {
    strike: 15800,
    call: {
      delta: 0.49,
      gamma: 0.04,
      vega: 0.79,
      theta: -1.33,
      oi_lakh: 29.5,
      ltp: 197.6,
    },
    put: {
      delta: -0.43,
      gamma: 0.18,
      vega: 2.66,
      theta: -0.88,
      oi_lakh: 12.1,
      ltp: 187.5,
    },
  },
  {
    strike: 15900,
    call: {
      delta: 0.67,
      gamma: 0.02,
      vega: 0.91,
      theta: -1.05,
      oi_lakh: 54.3,
      ltp: 302.7,
    },
    put: {
      delta: -0.35,
      gamma: 0.06,
      vega: 1.25,
      theta: -0.61,
      oi_lakh: 7.2,
      ltp: 103.2,
    },
  },
  {
    strike: 16000,
    call: {
      delta: 0.18,
      gamma: 0.40,
      vega: 3.22,
      theta: -0.44,
      oi_lakh: 8.6,
      ltp: 14.2,
    },
    put: {
      delta: -0.71,
      gamma: 0.005,
      vega: 0.42,
      theta: -1.66,
      oi_lakh: 26.8,
      ltp: 389.9,
    },
  },
];



export const CURRENT_STRIKE = 15480