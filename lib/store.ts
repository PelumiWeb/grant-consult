'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './features/Modal/modalSlice'
import { counterSlice } from './features/Counter/counterSlice'
import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Default: localStorage for web
import { tabSlice } from './features/Tabs/tabsLice';

import { scrollSlice } from './features/Scrolled/Scrolled';
import { dashboardSlice } from './features/DashboardRoutes/dashboardSlice';
import storage from './storage';
import { userSlice } from './features/User/userSlice';
import { consultantSlice } from './features/Consultant/consultantSlice';

const persistConfig = {
  key: 'root', // Key for storage
  storage, // Define where to store the data
  blacklist: ["tab", "scrolled", "consultant", "scrolled", "counter", "modal" , "dashboard"], // List of
};

const rootReducer = {
  modal: modalSlice.reducer,
  counter: counterSlice.reducer,
  tab: tabSlice.reducer,
  scrolled: scrollSlice.reducer,
  dashboard: dashboardSlice.reducer,
  user: userSlice.reducer,
  consultant: consultantSlice.reducer

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


export const store = makeStore();
export const persistor = persistStore(store);


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
