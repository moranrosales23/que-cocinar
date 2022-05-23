import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user';
import recipes from './slices/recipes';

const reducer = {
  user,
  recipes,
};
const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
