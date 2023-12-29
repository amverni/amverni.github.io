function getMonthName(date: Date): string {
  return date.toLocaleString('default', { month: 'long' });
}

/**
 * The caller has the responsibility to verify that the start and end dates are
 * valid absolutely and relative to each other.
 */
export function stringifyTimeRange(startDate: Date, endDate?: Date): string {
  const startYear = startDate.getFullYear();
  const startMonth = getMonthName(startDate);

  if (!endDate) {
    return `${startMonth} ${startYear} - present`;
  }

  const endYear = endDate.getFullYear();
  const endMonth = getMonthName(endDate);

  if (startYear === endYear) {
    if (startMonth === endMonth) {
      return `${startMonth} ${startYear}`;
    }

    return `${startMonth} - ${endMonth} ${startYear}`;
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
}
