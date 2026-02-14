import axios from 'axios';

// Create Axios instance with default config
const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Hardcoded for now, should move to env
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add interceptor for response error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle common errors (401, 403, 500)
        console.error('API Error:', error.response || error.message);
        return Promise.reject(error);
    }
);

export default api;
