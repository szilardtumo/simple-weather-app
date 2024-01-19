export const isSameDay = (d1: Date, d2: Date): boolean => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

export const getRelativeDayName = (date: Date): string => {
  const today = new Date();
  const yesterday = new Date(today.getTime() - 86400000);
  const tomorrow = new Date(today.getTime() + 86400000);

  if (isSameDay(date, yesterday)) {
    return 'Yesterday';
  }

  if (isSameDay(date, today)) {
    return 'Today';
  }

  if (isSameDay(date, tomorrow)) {
    return 'Tomorrow';
  }

  return date.toLocaleDateString('en-US', { weekday: 'long' });
};
