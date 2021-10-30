/* eslint-disable no-undef*/
import axios from "axios";
const { REACT_APP_API_KEY } = process.env;

const callApi = async ({ method = "get", baseURL, url, params, data }) => {
  const res = await axios({
    method,
    baseURL,
    url,
    params: { api_key: REACT_APP_API_KEY, ...params },
    data,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  return res.data;
};

export default callApi;
