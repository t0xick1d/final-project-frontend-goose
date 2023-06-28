import axios from 'axios';

axios.defaults.baseURL = 'https://goose-track-ity9.onrender.com/api/';

export const getTasks = date =>
  axios.get(`/tasks/?dateFrom=${date.from}&dateTo=${date.to}`);

// export const createTask = data => axios.post('/tasks/', data);

// export const updateTask = data =>
//   axios.patch(`/tasks/${data.id}`, data.updatedTask);

// export const deleteTask = id => axios.delete(`/tasks/${id}`);
