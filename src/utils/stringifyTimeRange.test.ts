import { stringifyTimeRange } from "./stringifyTimeRange";

type StringifyTimeRangeTestInfo = {
  startDate: Date;
  endDate?: Date;
  expected: string;
  testName: string;
}

const stringifyTimeRangeTests: StringifyTimeRangeTestInfo[] = [
  {
    startDate: new Date('05/01/2020'),
    endDate: new Date('05/01/2021'),
    expected: 'May 2020 - May 2021',
    testName: 'returns correct for same month different year'
  },
  {
    startDate: new Date('05/01/2020'),
    expected: 'May 2020 - present',
    testName: 'returns correct for no end date'
  },
  {
    startDate: new Date('05/01/2020'),
    endDate: new Date('05/01/2020'),
    expected: 'May 2020',
    testName: 'returns correct for same month same year'
  },
  {
    startDate: new Date('05/01/2020'),
    endDate: new Date('06/01/2020'),
    expected: 'May - June 2020',
    testName: 'returns correct for different month same year'
  },
  {
    startDate: new Date('05/01/2020'),
    endDate: new Date('06/01/2021'),
    expected: 'May 2020 - June 2021',
    testName: 'returns correct for different month different year'
  }
];

stringifyTimeRangeTests.forEach(({
  startDate, endDate, expected, testName
}) => {
  const actual = stringifyTimeRange(startDate, endDate);
  test(testName, () => {
    expect(actual).toEqual(expected);
  });
});