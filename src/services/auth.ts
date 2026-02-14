import api from '../lib/api';

export interface User {
    id: number;
    username: string;
    email: string;
    credits_balance: number;
    subscription_status: string;
}

export interface AuthResponse {
    token: string;
    user_id: number;
    email: string;
    credits: number;
}

export const AuthService = {
    login: async (username: string, password: string) => {
        const response = await api.post<AuthResponse>('/auth/login/', { username, password });
        localStorage.setItem('token', response.data.token);
        return response.data;
    },

    register: async (username: string, email: string, password: string) => {
        await api.post('/auth/register/', { username, email, password });
        // Auto login after register
        return AuthService.login(username, password);
    },

    me: async () => {
        const response = await api.get<User>('/auth/me/');
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('token');
    }
};

// Update API interceptor to inject token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
});
