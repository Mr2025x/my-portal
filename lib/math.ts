// 严格复刻 simeydotme/pokemon-cards-css 中的数学辅助函数

export const clamp = (value: number, min: number = 0, max: number = 100): number => {
  return Math.min(Math.max(value, min), max);
};

export const round = (value: number, precision: number = 3): number => {
  return parseFloat(value.toFixed(precision));
};

export const adjust = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number => {
  return round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));
};