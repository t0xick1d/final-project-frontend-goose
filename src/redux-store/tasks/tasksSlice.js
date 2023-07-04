import { createSlice } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  editTask,
  fetchTasksMonth,
  fetchTasksDay,
} from '../tasks/tasksOperations';

const initialState = {
  items: [],
  // items: {
  //   title: '',
  //   start: '',
  //   end: '',
  //   priority: '',
  //   date: '',
  //   category: '',
  // },
  isLoading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchTasksMonth.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasksMonth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasksMonth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchTasksDay.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasksDay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload.length > 0) {
          state.items = state.items.filter(task => {
            return task.date !== action.payload[0].date;
          });
        }
        state.items.push(...action.payload);
      })
      .addCase(fetchTasksDay.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(task => task._id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const taskIndex = state.items.findIndex(
          task => task._id === action.payload.task._id
        );
        if (taskIndex !== -1) {
          state.items[taskIndex] = action.payload.task;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default tasksSlice.reducer;
