import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jekalo-systems-assessment-api.herokuapp.com/api",
});

export default axiosInstance;
