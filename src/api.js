import axios from 'axios';

const API_ROOT = 'http://localhost:4000/api';

const ajax = {
    get: (url) => axios.get(`${API_ROOT}${url}`).then((response) => response.data),
};

export const searchMembers = (search) => {
    return ajax.get(`/list-members?search=${search}`);
};
