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

function addNewPost(values: {
  dateOfModification: string;
  dateOfCreation: string;
  content: string;
  userId: number;
  image: string;
}) {
  return axios.post("/posts", values);
}

function getUserById(userId: number) {
  return axios.get(`/users?id=${userId}`);
}

function getPostById(postId: number) {
  return axios.get(`/posts/${postId}?_expand=user`);
}

function deletePost(postId: number) {
  return axios.delete(`/posts/${postId}`);
}

function updatePost(
  postId: number,
  data: {
    dateOfModification: string;
    dateOfCreation: string;
    content: string;
    userId: number;
    image: string;
  }
) {
  return axios.put(`/posts/${postId}`, data);
}

function userPosts(userId: number) {
  return axios.get(`users/${userId}/posts`);
}

function getNewPost() {
  return axios.get(`/posts?_sort=dateOfCreation&_order=desc`);
}

function updateUser(
  userId: number,
  data: {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
  }
) {
  return axios.put(`/users/${userId}`, data);
}

const exports = {
  register,
  getAllPosts,
  login,
  addNewPost,
  getUserById,
  getPostById,
  deletePost,
  updatePost,
  userPosts,
  getNewPost,
  updateUser,
};

export default exports;
