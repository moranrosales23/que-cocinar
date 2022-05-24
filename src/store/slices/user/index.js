import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  lastname: '',
  nickname: '',
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
      const { name, lastname, img, nickname, favorites, ingredients, complete_perfil } =
        action.payload;
      return {
        name,
        lastname,
        img,
        nickname,
        favorites,
        ingredients,
        complete_perfil,
      };
    },
    setFavorite: (state, action) => ({ ...state, favorites: action.payload }),
    setIngredient: (state, action) => ({ ...state, ingredients: action.payload }),
    updateProfile: (state, action) => ({ ...state, ...action.payload }),
    setImage: (state, action) => ({ ...state, img: action.payload }),
  },
});

export const { loadProfile, setFavorite, setIngredient, updateProfile, setImage } =
  userSlice.actions;

export default userSlice.reducer;
