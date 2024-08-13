export function getLocaleMonth(date: Date): string {
  return date.toLocaleString('en-US', { month: 'long' });
}

export function stringifyDateRange(startDate: Date, endDate?: Date): string {
  if (!endDate) {
    return `${getLocaleMonth(startDate)} ${startDate.getFullYear()} - present`;
  }

  if (startDate > endDate) {
    throw new Error('Invalid date range: start date later than end date');
  }

  const startYear = startDate.getFullYear();
  const startMonth = getLocaleMonth(startDate);
  const endYear = endDate.getFullYear();
  const endMonth = getLocaleMonth(endDate);
  if (startYear !== endYear) {
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  }

  if (startMonth !== endMonth) {
    return `${startMonth} - ${endMonth} ${endYear}`;
  }

  return `${endMonth} ${endYear}`;
}
