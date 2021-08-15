import axios from 'axios'

import MockUsers from 'app/data/users.json'
import MockPosts from 'app/data/posts.json'
import MockTags from 'app/data/tags.json'

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const APP_ID = process.env.NEXT_PUBLIC_APP_ID;

const config = {
  headers: {
    'Content-Type': 'application/json',
    'app-id': APP_ID,
  }
}

export const getUsers = () => {
  
  // return axios.get(`${API_URL}/user`, config);
  return Promise.resolve({data: MockUsers});
}

export const getPosts = () => {
  
  // return axios.get(`${API_URL}/post`, config);
  return Promise.resolve({data: MockPosts});
}

export const getTags = () => {
  
  // return axios.get(`${API_URL}/post`, config);
  return Promise.resolve({data: MockTags});
}

export const fetcher = url => axios.get(`${API_URL}${url}`, config)
  .then(r => r.data)