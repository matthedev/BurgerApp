import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-c8634.firebaseio.com/",
});

export default instance;
