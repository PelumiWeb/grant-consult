'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './features/Modal/modalSlice'
import { counterSlice } from './features/Counter/counterSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default: localStorage for web
import { tabSlice } from './features/Tabs/tabsLice';
import { SignupSlice } from './features/Signup/SignupSlice';
import { scrollSlice } from './features/Scrolled/Scrolled';

const persistConfig = {
  key: 'root', // Key for storage
  storage, // Define where to store the data
  blacklist: ["tab", "scrolled"], // List of
};

const rootReducer = {
  modal: modalSlice.reducer,
  counter: counterSlice.reducer,
  tab: tabSlice.reducer,
  signup: SignupSlice.reducer,
  scrolled: scrollSlice.reducer

};

const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));


export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
     middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            'persist/PERSIST',
            'persist/REHYDRATE',
            'persist/FLUSH',
            'persist/PAUSE',
            'persist/PURGE',
            'persist/REGISTER',
          ],
        },
      }),
  })
}


export const persistor = persistStore(makeStore());

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']