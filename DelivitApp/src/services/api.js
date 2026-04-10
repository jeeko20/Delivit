import axios from 'axios';

const API_URL = process.env.API_URL || 'https://api.delivit.com';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token d'authentification
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // À adapter pour React Native (AsyncStorage)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Service d'authentification
export const authService = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  
  logout: async () => {
    await api.post('/auth/logout');
  },
  
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

// Service des produits
export const productsService = {
  getAll: async (params = {}) => {
    const response = await api.get('/products', { params });
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  
  getByCategory: async (category) => {
    const response = await api.get('/products', { params: { category } });
    return response.data;
  },
  
  search: async (query) => {
    const response = await api.get('/products/search', { params: { q: query } });
    return response.data;
  },
};

// Service des commandes
export const ordersService = {
  create: async (orderData) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  },
  
  getAll: async () => {
    const response = await api.get('/orders');
    return response.data;
  },
  
  getById: async (id) => {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  },
  
  updateStatus: async (id, status) => {
    const response = await api.patch(`/orders/${id}/status`, { status });
    return response.data;
  },
};

// Service de paiement
export const paymentService = {
  initiateMonCash: async (orderId, amount) => {
    const response = await api.post('/payments/moncash', { orderId, amount });
    return response.data;
  },
  
  initiateNatCash: async (orderId, amount) => {
    const response = await api.post('/payments/natcash', { orderId, amount });
    return response.data;
  },
  
  initiateStripe: async (orderId, amount, cardToken) => {
    const response = await api.post('/payments/stripe', { orderId, amount, cardToken });
    return response.data;
  },
};

export default api;
