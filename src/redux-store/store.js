import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  // має в подальшому знадобитись
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import exampleSlice from './example/exampleSlice';
import { tasksReducer } from './tasks/tasks.slice';
// має в подальшому знадобитись
//import storage from 'redux-persist/lib/storage';

// це налаштування з минулого проект по авторизації
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    // сюди додаються slice
    // це створена заглушка поки немаэ ще slice
    tasks: tasksReducer,
    example: exampleSlice,
  },
  middleware,
});

export const persistor = persistStore(store);
