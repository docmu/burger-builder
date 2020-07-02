import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-app-1546f.firebaseio.com/",
});

export default instance;
