import { FieldValues } from "react-hook-form";

import axios from "../httpClient";

function register(values: FieldValues) {
  return axios.post(`/register`, values);
}

function login(values: FieldValues) {
  return axios.post(`/login`, values);
}

function getAllPosts() {
  return axios.get("/posts?_expand=user&_sort=dateOfCreation&_order=asc");
}

function addNewPost(values: any) {
  return axios.post("/posts", values);
}

function getUserById(userId: number) {
  return axios.get(`/users?id=${userId}`);
}

function getPostById(postId: number) {
  return axios.get(`/posts/${postId}?_expand=user`);
}

const exports = {
  register,
  getAllPosts,
  login,
  addNewPost,
  getUserById,
  getPostById,
};

export default exports;
