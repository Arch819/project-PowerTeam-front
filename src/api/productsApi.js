import axios from 'axios';

export const getProducts = async query => {
  const { data } = await axios.get('products', query);
  return data;
};

export const getProductsByCategories = async () => {
  const { data } = await axios.get('products/categories');
  return data;
};
