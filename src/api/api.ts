import axios from "../httpClient";

function register(values: any) {
  //will be added type
  return axios.post(`/register`, values);
}

const exports = {
  register,
};

export default exports;
