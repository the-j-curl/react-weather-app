export const API_KEY = process.env.REACT_APP_API_KEY;

export const convertLocalTime = (time: number): string => {
  const localTime = new Date(time * 1000);
  const localTimeString = localTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return localTimeString;
};
