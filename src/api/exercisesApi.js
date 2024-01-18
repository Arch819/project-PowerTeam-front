import axios from 'axios';

export const getExercises = async () => {
  const { data } = await axios.get('exercises');
  return data;
};

export const getExercisesByFilters = async paramsExercises => {
  const { data } = await axios.get('exercises/filters', paramsExercises);
  return data;
};
