import { configureStore, createSlice } from '@reduxjs/toolkit';
import { getRandomColorHEX } from './utils/getRandomColor';

const elementsSlice = createSlice({
  name: 'elements',
  initialState: [],
  reducers: {
    addElement: (state) => {
      const newElement = {
        id: Date.now(),
        color: getRandomColorHEX(),
      };
      state.unshift(newElement);
    },
    removeElement: (state) => {
      state.pop();
    },
  },
});

export const { addElement, removeElement } = elementsSlice.actions;

const store = configureStore({
  reducer: {
    elements: elementsSlice.reducer,
  },
});

export default store;
