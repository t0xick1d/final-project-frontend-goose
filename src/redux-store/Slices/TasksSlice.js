import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date(),
        name: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
