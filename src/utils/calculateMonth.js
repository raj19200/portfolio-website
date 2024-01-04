function calculateMonths(startDate, endDate) {
  // Parse the input dates
  startDate = new Date(startDate);
  endDate = new Date(endDate);

  // Calculate the difference in years and months
  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth();

  // Calculate the total number of months
  const totalMonths = yearsDiff * 12 + monthsDiff;

  return totalMonths;
}

export default calculateMonths;
