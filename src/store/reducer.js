 import persistReducer from 'redux-persist/es/persistReducer';
 import storage from 'redux-persist/lib/storage';
import { appReducer } from './appState/slice';
import { authReducer } from './auth/slice';
import { diaryReducer } from './diary/diarySlice';
import { exercisesReducer } from './exercises/exercisesSlice';
import { productsReducer } from './products/productsSlice';
import { statisticReducer } from './statistic/statisticSlice';

 const persistConfig = {
   key: 'user',
   storage,
   whitelist: ['token'],
 };
 const userPersistReducer = persistReducer(persistConfig, authReducer );

export const reducer = {
  auth: userPersistReducer,
  products: productsReducer,
  exercises: exercisesReducer,
  diary: diaryReducer,
  statistic: statisticReducer,
  appState: appReducer,
};
