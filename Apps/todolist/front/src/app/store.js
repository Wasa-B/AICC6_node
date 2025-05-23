import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './apiSlice';

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
})