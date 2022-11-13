import axios from "axios";

const axiosInstance=axios.create({
    baseURL: 'http://52.66.246.172:5000/api/',
})

export default axiosInstance