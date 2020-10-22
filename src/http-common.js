import axios from "axios";

export default axios.create({
  baseURL: "http://exp.localhost/api",
  headers: {
    "Content-type": "application/json"
  }
});
