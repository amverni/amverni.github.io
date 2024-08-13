import { getLocaleMonth, stringifyDateRange } from "./dateUtils";

describe('getLocaleMonth', () => {
  type GetLocaleMonthParams = Parameters<typeof getLocaleMonth>;
  type GetLocaleMonthTestInfo = {
    inputDate: GetLocaleMonthParams[0];
    expected: ReturnType<typeof getLocaleMonth>;
  };

  const getLocaleMonthTests: GetLocaleMonthTestInfo[] = [
    {
      inputDate: new Date('01/01/2001'),
      expected: 'January'
    },
    {
      inputDate: new Date('12/01/2001'),
      expected: 'December'
    },
    {
      inputDate: new Date('08/01/2001'),
      expected: 'August'
    }
  ];

  getLocaleMonthTests.forEach(({
    inputDate,
    expected
  }) => {
    const testName = `return ${expected} for date = ${inputDate.toDateString()}`;
    it(testName, () => {
      const actual = getLocaleMonth(inputDate);
      expect(actual).toEqual(expected);
    })
  })
});

describe('stringifyDateRange', () => {
  type StringifyDateRangeParams = Parameters<typeof stringifyDateRange>;
  type StringifyDateRangeTestInfo = {
    inputStartDate: StringifyDateRangeParams[0];
    inputEndDate: StringifyDateRangeParams[1];
    expected: ReturnType<typeof stringifyDateRange>;
  }

  const stringifyDateRangeTests: StringifyDateRangeTestInfo[] = [
    {
      inputStartDate: new Date('01/01/2001'),
      inputEndDate: undefined,
      expected: 'January 2001 - present'
    },
    {
      inputStartDate: new Date('01/01/2001'),
      inputEndDate: new Date('01/31/2001'),
      expected: 'January 2001',
    },
    {
      inputStartDate: new Date('01/01/2001'),
      inputEndDate: new Date('01/31/2024'),
      expected: 'January 2001 - January 2024'
    },
    {
      inputStartDate: new Date('05/18/2012'),
      inputEndDate: new Date('09/23/2012'),
      expected: 'May - September 2012'
    }
  ];

  stringifyDateRangeTests.forEach(({
    inputStartDate,
    inputEndDate,
    expected
  }) => {
    const testName = `returns ${expected} for startDate = ${inputStartDate.toDateString()}, endDate = ${inputEndDate ? inputEndDate.toDateString() : 'undefined'}`;
    it(testName, () => {
      const actual = stringifyDateRange(inputStartDate, inputEndDate);
      expect(actual).toEqual(expected);
    })
  });

  it('should throw error when end date is before start date', () => {
    const inputStartDate = new Date('07/05/2020');
    const inputEndDate = new Date('11/19/2005');
    expect(() => stringifyDateRange(inputStartDate, inputEndDate)).toThrow();
  })
})
