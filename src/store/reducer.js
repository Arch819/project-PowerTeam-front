// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';
import { appReducer } from './appState/slice';
import { diaryReducer } from './diary/diarySlice';
import { statisticReducer } from './statistic/statisticSlice';

// const persistConfig = {
//   key: 'user',
//   storage,
//   whitelist: ['token'],
// };
// const userPersistReducer = persistReducer(persistConfig, );

export const reducer = {
  diary: diaryReducer,
  statistic: statisticReducer,
  appState: appReducer,
};
