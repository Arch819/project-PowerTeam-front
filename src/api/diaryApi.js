import axios from 'axios';

export const fetchGetDiaryByDate = async date => {
  const { data } = await axios(`diary/${date}`);
  return data;
};

export const fetchAddProduct = async product => {
  const { data } = await axios.post('diary/products', product);
  return data;
};

export const fetchDeleteProduct = async idProduct => {
  await axios.delete(`diary/products/${idProduct}`);
};

export const fetchAddExercise = async product => {
  const { data } = await axios.post('diary/exercises', product);
  return data;
};

export const fetchDeleteExercise = async idExercise => {
  await axios.delete(`diary/exercises/${idExercise}`);
};
