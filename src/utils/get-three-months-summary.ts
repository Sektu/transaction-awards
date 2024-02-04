export const getThreeMonthsSummary = (
  summaryPerMonth: Record<string, number>
) => {
  return Object.keys(summaryPerMonth).reduce((acc, month) => {
    return acc + summaryPerMonth[month];
  }, 0);
};
