import { initialState } from './exercisesInitialState';

export const handleGetAllExercisesFulfilled = (state, { payload }) => {
  state.exercises = payload;
};

export const handleGetExercisesFiltersFulfilled = (state, { payload }) => {
  state.exercisesFilters = payload;
};

export const handleGetExercisesIdFulfilled = (state, { payload }) => {
  state.exercisesById = payload;
};

export const resetExercisesState = () => {
  return initialState;
};
