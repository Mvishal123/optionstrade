export type OptionData = {
  gamma: number;
  vega: number;
  delta: number;
  theta: number;
  oi_lakh: number;
  ltp: number;
};

export type StrikeData = {
  strike: number;
  call: OptionData;
  put: OptionData;
};
