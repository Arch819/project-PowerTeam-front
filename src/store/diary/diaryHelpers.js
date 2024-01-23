import { initialState } from './initialState';

export const getDiaryFulfilled = (state, { payload }) => {
  state.products = payload.diaryProducts;
  state.exercises = payload.diaryExercises;
};
export const addDiaryProductFulfilled = (state, { payload }) => {
  state.products.push(payload);
};
export const deleteDiaryProductFulfilled = (state, { meta: { arg } }) => {
  state.products = state.products.filter(
    products => products.idProduct !== arg
  );
};
export const addDiaryExerciseFulfilled = (state, { payload }) => {
  state.exercises.push(payload);
};
export const deleteDiaryExerciseFulfilled = (state, { meta: { arg } }) => {
  state.exercises = state.exercises.filter(
    exercises => exercises.idExercise !== arg
  );
};

export const resetState = () => {
  return initialState;
};
