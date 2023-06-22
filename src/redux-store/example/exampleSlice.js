import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // має бути макет обʼєкту який отримує компонент
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    // тут в минулому проекті була фільтрація контактів
  },
  extraReducers: {
    // мають бути операції з запросом на бекенд
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  filterContacts,
} = exampleSlice.actions;

export default exampleSlice.reducer;
