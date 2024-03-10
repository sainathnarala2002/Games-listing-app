import axios from "axios";

const key = "53cfa3c8c2b14ad3aad0f674b93f9ef4";
const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
});

const getGenreList = axiosCreate.get('/genres?key=' + key);

export default {
    getGenreList,
}