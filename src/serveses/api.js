import axios from "axios";

export const GetAxios = () => {
  return axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      API_KEY: "dsdd32eh328joi29ejo",
    },
  });
};

export const GetAxiosAuth = () => {
  return axios.create({
    baseURL: "https://twitterapi.liara.run/api/",
    headers: {
      API_KEY: "dsdd32eh328joi29ejo",
    },
  });
};

export const GetAxiosApi = () => {
  return axios.create({
    baseURL: "https://twitterapi.liara.run/api/",
    headers: {
      "x-auth-token": localStorage.getItem("x-auth-token"),
    },
  });
};
