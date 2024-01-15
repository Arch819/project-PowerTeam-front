import axios from 'axios';

export const getStatistic = async () => {
  const { data } = await axios('statistic');
  return data;
};
