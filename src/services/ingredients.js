import API from './base';

const add = (ingredient) => API.post('ingredient', ingredient);

const update = ({ _id, description: ingredient }) => API.patch(`ingredient/${_id}`, { ingredient });

const remove = (id) => API.delete(`ingredient/${id}`);

export default { add, update, remove };
