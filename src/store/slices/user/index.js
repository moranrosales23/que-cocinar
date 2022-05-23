import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  lastname: '',
  alias: '',
  img: '',
  favorites: [],
  ingredients: [],
  complete_perfil: false,
};

const userSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    loadProfile: (state, action) => {
      const { name, lastname, img, alias, favorites, ingredients, complete_perfil } =
        action.payload;
      return {
        name,
        lastname,
        img,
        alias,
        favorites,
        ingredients,
        complete_perfil,
      };
    },
    setFavorite: (state, action) => ({ ...state, favorites: action.payload }),
    setIngredient: (state, action) => ({ ...state, ingredients: action.payload }),
  },
});

export const { loadProfile, setFavorite, setIngredient } = userSlice.actions;

export default userSlice.reducer;
