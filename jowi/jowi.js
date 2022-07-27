const dayQty = (month) => {
  const thirtyDayMonth = ["april", "june", "september", "november"];
  const thirtyOneDayMonth = [
    "january",
    "march",
    "may",
    "july",
    "august",
    "october",
    "december",
  ];
  if (thirtyDayMonth.includes(month)) {
    return 30;
  }
  if (thirtyOneDayMonth.includes(month)) {
    return 31;
  } else {
    return 28;
  }
};
