import axios from 'axios';

export const getExercises = async (paramsExercises) => {
  const { data } = await axios.get('exercises', paramsExercises);   
  return data;
};

export const getExercisesByFilters = async () => {
  const { data } = await axios.get('exercises/filters');
  return data;
};
