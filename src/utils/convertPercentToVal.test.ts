import { convertPercentToVal } from './convertPercentToVal';

type ConvertPercentToHexParams = Parameters<typeof convertPercentToVal>;
type ConvertPercentToHexTestInfo = {
  inputPercent: ConvertPercentToHexParams[0];
  inputMax: ConvertPercentToHexParams[1];
  inputMin?: ConvertPercentToHexParams[2];
  expected: ReturnType<typeof convertPercentToVal>;
}

const convertPercentToHexTests: ConvertPercentToHexTestInfo[] = [
  {
    inputPercent: 0,
    inputMax: 100,
    expected: 0
  },
  {
    inputPercent: 1,
    inputMax: 50,
    expected: 50
  },
  {
    inputPercent: 0.5,
    inputMax: 130,
    expected: 65
  },
  {
    inputPercent: 0.20,
    inputMax: 30,
    expected: 6
  },
  {
    inputPercent: 0.85,
    inputMax: 150,
    expected: 127.5
  },
  {
    inputPercent: 0,
    inputMin: 35,
    inputMax: 95,
    expected: 35
  },
  {
    inputPercent: 1,
    inputMin: 20,
    inputMax: 40,
    expected: 40
  },
  {
    inputPercent: 0.75,
    inputMin: 50,
    inputMax: 150,
    expected: 125
  }
];

convertPercentToHexTests.forEach(({
  inputPercent, inputMax, inputMin, expected
}) => {
  let testName = `returns ${expected} for percent = ${inputPercent}`;
  if (inputMin) {
    testName += `, min = ${inputMin}`;
  }
  if (inputMax) {
    testName += `, max = ${inputMax}`;
  }
  it(testName, () => {
    const actual = convertPercentToVal(inputPercent, inputMax, inputMin);
    expect(actual).toEqual(expected);
  });
});
