import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './toDoTask';

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
})