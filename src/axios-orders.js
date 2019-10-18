import axios from "axios";

const instnce = axios.create({
  baseURL: "https://react-burger-a02a0.firebaseio.com/"
});

export default instnce;
