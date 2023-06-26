import { createSlice } from '@reduxjs/toolkit';
import { create, get, update, deleteItem } from './tasks.operations';

const initialState = {
  taskList: [],
  isLoading: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder =>
    builder
      // .addCase(create.pending, (state, _) => {
      //   state.isLoading = true;
      // })
      // .addCase(create.fulfilled, (state, action) => {
      //   state.taskList.push(action.payload);
      //   state.isLoading = false;
      // })
      // .addCase(create.rejected, (state, _) => {
      //   state.isLoading = false;
      // })
      .addCase(get.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(get.fulfilled, (state, action) => {
        state.taskList = [...action.payload.tasks];
        state.isLoading = false;
      })
      .addCase(get.rejected, (state, _) => {
        state.isLoading = false;
      }),
  // .addCase(update.pending, (state, _) => {
  //   state.isLoading = true;
  // })
  // .addCase(update.fulfilled, (state, __) => {
  //   state.isLoading = false;
  // })
  // .addCase(update.rejected, (state, _) => {
  //   state.isLoading = false;
  // })
  // .addCase(deleteItem.pending, (state, _) => {
  //   state.isLoading = true;
  // })
  // .addCase(deleteItem.fulfilled, (state, action) => {
  //   state.taskList.pop(action.payload);
  //   state.isLoading = false;
  // })
  // .addCase(deleteItem.rejected, (state, _) => {
  //   state.isLoading = false;
  // }),
});

export const tasksReducer = tasksSlice.reducer;
