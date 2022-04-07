import { FieldValues } from "react-hook-form";

import axios from "../httpClient";

function register(values: FieldValues) {
  return axios.post(`/register`, values);
}

function login(values: FieldValues) {
  return axios.post(`/login`, values);
}

function getAllPosts() {
  return axios.get("/posts?_expand=user");
}

const exports = {
  register,
  getAllPosts,
  login,
};

export default exports;
