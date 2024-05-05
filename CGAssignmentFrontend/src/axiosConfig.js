import axios from "axios";
import { TOKEN } from "./config";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default axiosInstance;
