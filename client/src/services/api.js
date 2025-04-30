import axios from 'axios';

const api = axios.create({
    baseURL: window.location.protocol + "//" + window.location.hostname + ":" + 5000,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// // Request interceptor
// api.interceptors.request.use(
//     (config) => {
//         // Perform actions before sending request
//         return config;
//     },
//     (error) => {
//         // Handle request errors
//         return Promise.reject(error);
//     }

// );

// // Response interceptor
// api.interceptors.response.use(
//     (response) => {
//       // Modify the response data
//       return response;
//     },
//     (error) => {
//       // Handle response errors
//       return Promise.reject(error);
//     }
// );

export default api;