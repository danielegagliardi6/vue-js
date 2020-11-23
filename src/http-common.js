import axios from "axios";
require('dotenv').config();

export default axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL || "http://localhost:3000/api",
    headers: {
        "Content-type": "application/json"
    }
});