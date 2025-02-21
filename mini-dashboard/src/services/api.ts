import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const getNetworkInfo = async () => {
    const response = await axios.get(`${API_BASE_URL}/network-info`);
    return response.data;
};

export const getLogs = async () => {
    const response = await axios.get(`${API_BASE_URL}/logs`);
    return response.data;
};