import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-react-burger-5450e.firebaseio.com/",
});

export default instance;
