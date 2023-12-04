export function convertPercentToVal(percent: number, max: number, min = 0): number {
  return (percent * (max - min)) + min;
}
