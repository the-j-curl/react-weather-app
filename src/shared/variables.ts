export const API_KEY = process.env.REACT_APP_API_KEY;

export const convertLocalTime = (time: number): string => {
  const localTime = new Date(time * 1000);
  const localTimeString = localTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return localTimeString;
};

export const convertLocalDay = (day: number): string => {
  const date = new Date(day * 1000);
  const dayDateString = date.toLocaleDateString([], {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
  return dayDateString;
};

export const getDay = (day: number): number => {
  const date = new Date(day * 1000);
  const dayOfMonth = date.toLocaleDateString([], {
    day: 'numeric',
  });
  return +dayOfMonth;
};

export const trimTimeZoneString = (text: string): string => {
  const index = text.indexOf('/') || 0;
  return text.slice(index + 1);
};

export const capitaliseFirstLetter = (text: string): string => {
  return text[0]?.toUpperCase() + text.slice(1);
};
