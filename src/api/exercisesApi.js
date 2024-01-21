import axios from 'axios';

export const getExercises = async paramsExercises => {
  const { data } = await axios.get('exercises', {
    params: { ...paramsExercises },
  });
  return data;
};

export const getExercisesByFilters = async filter => {
  const { data } = await axios.get('exercises/filters', {
    params: { filter },
  });
  return data;
};

export const getExercisesById = async exercisesId => {
  const { data } = await axios.get(`exercises/${exercisesId}`);
  return data;
};
