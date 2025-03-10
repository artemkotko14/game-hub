import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9321ad55dc2e459ea8170d71c6c2da80",
  },
});
