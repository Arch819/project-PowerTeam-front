import axios from 'axios';

export const getExercises = async paramsExercises => {
  const { data } = await axios.get('exercises', {
    params: { ...paramsExercises },
  });
  return data;
};

export const getExercisesByFilters = async paramsExercisesByFilter => {
  const { data } = await axios.get('exercises/filters', {
    params: { paramsExercisesByFilter },
  });
  return data;
};

export const getExercisesById = async exercisesId => {
  const { data } = await axios.get(`exercises/${exercisesId}`);
  return data;
};
