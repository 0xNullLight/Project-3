/* Think of this store as a big box where you can keep track of different types of information. 
In this case, it's specifically set up to handle authentication (auth) related data through 
something called authReducer. The code doesn't take direct inputs from users, but rather it 
creates a structure that other parts of the application can use to read data from and make 
changes to the store. It produces two important types that help TypeScript understand what kind of 
data is in the store (RootState) and how to make changes to it (AppDispatch).*/

/* This code serves as the foundation for state management in the application, similar to how a bank vault keeps money organized and secure 
- the store keeps application data organized and ensures it can only be changed in controlled ways.*/

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;