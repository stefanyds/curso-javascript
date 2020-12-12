const weekDays = (day) => {
  switch (day) {
    case 1:
      return 'weekend';
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return 'weekday';
    case 7:
      return 'weekend';
    default:
      return 'invalid day';
  }
};

module.exports = { weekDays };
