import axios from "axios";

const api = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "e6fd15f63d414af48d3180057b543f19",
  },
});

export default api;

// {
//   api.get("/games").then((response) => console.log(response.data));
// }
