export const getDiaryFulfilled = (state, { payload }) => {
  state.products = payload.diaryProducts;
  state.exercises = payload.diaryExercises;
};
export const addDiaryProductFulfilled = (state, { payload }) => {
  state.products.push(payload);
};
export const deleteDiaryProductFulfilled = (state, { payload }) => {
  state.products = state.products.filter(products => products._id !== payload);
};
export const addDiaryExerciseFulfilled = (state, { payload }) => {
  state.exercises.push(payload);
};
export const deleteDiaryExerciseFulfilled = (state, { payload }) => {
  state.exercises = state.exercises.filter(
    exercises => exercises._id !== payload
  );
};
