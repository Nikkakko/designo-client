import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getCategoryProjects = async (category: string) => {
  return await instance.get(`/projects/${category}`);
};

export default instance;
