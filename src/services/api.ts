import axios from "axios";

const API_BASE_URL = process.env.BASE_URL_API || "https://booking-service-api-kolx.onrender.com";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

//Request Interceptor

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if(token)
    {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    
    if (response && response.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);
