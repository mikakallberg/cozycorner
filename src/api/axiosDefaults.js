import axios from "axios";

axios.defaults.baseURL = 'https://portfolio-project-5-drf-api.herokuapp.com/'
// axios.defaults.baseURL = 'https://3000-mikakallberg-cozycorner-5xekjfruf8l.ws-eu72.gitpod.io'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();