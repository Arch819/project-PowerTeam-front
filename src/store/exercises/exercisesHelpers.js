export const handleGetAllExercisesFulfilled = (state, { payload }) => {
  state.exercises = payload;
};

export const handleGetExercisesFiltersFulfilled = (state, { payload }) => {
  state.exercisesFilters = payload;
};
