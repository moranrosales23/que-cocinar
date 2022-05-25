import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    loadRecipes: (state, action) => {
      return {
        ...state,
        recipes: [...state.recipes, ...action.payload],
      };
    },
    cleanRecipes: (state, action) => {
      return {
        ...state,
        recipes: [...action.payload],
      };
    },
    updateFavorite: (state, action) => {
      return {
        ...state,
        recipes: [...action.payload],
      };
    },
  },
});

export const { loadRecipes, updateFavorite, cleanRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
