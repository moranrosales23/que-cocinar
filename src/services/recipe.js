import API from './base';

const all = ({ page = 1, limit = 10 }) => API.get('recipe', { params: { page, limit } });

const find = (recipe) => API.get(`recipe/${recipe}`);

const setFavorite = (recipe) => API.patch(`recipe/${recipe}/favorites`);

const addComment = (recipe, comment) => API.patch(`recipe/${recipe}/comments`, { comment });

export default { all, find, setFavorite, addComment };
