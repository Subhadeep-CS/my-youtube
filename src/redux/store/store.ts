// store.ts
import { configureStore } from "@reduxjs/toolkit";
import globalSlice from '../slices/globalSlice';
import searchSlice from '../slices/searchSlice';

const store = configureStore({
  reducer: {
    global: globalSlice,
    search:searchSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
