import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({ baseURL: BASE_URL });

export const getProfile = () => api.get('/profile');
export const getSkills = () => api.get('/skills');
export const getExperiences = () => api.get('/experiences');
export const getProjects = () => api.get('/projects');
export const sendContact = (data) => api.post('/contacts', data);
