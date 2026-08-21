import axios from 'axios';

const API_BASE_URL = 'https://jobportal-api-2026.onrender.com';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Auth Services
export const authService = {
  register: async (userData) => {
    const response = await api.post('/api/auth/register', userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post('/api/auth/login', credentials);
    return response.data;
  },
};

// Job Services
export const jobService = {
  getAllJobs: async () => {
    const response = await api.get('/api/jobs');
    return response.data;
  },

  createJob: async (jobData, token) => {
    const response = await api.post('/api/jobs', jobData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  deleteJob: async (jobId, token) => {
    const response = await api.delete(`/api/jobs/${jobId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  applyToJob: async (jobId, formData, token) => {
    const response = await api.post(`/api/jobs/${jobId}/apply`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getJobApplicants: async (jobId, token) => {
    const response = await api.get(`/api/jobs/${jobId}/applicants`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
};

export default api;
