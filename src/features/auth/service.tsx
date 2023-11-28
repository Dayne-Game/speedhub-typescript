import api from '../../config/api';
import { API_URL } from '../../config/constants';

export const login = async (data: object) => {
    const url = API_URL + '/api/v1/auth/login';

    const response = await api.post(url, data);

    if (response?.data?.payload) {
        localStorage.setItem('userInfo', JSON.stringify(response.data.payload.user));
        localStorage.setItem('accept_token', response.data.payload.accept_token);
    }

    return response.data
}

export const logout = async () => {

    const url = API_URL + '/api/v1/auth/logout'

    const response = await api.post(url);

    if(response?.data) {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('accept_token');
    }

    return response.data
}

export const reAuth = async (token: string) => {
    const url = API_URL + '/api/v1/auth/reauthenticate';

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await api.get(url, config);

    return response.data
}

export const requestResetPassword = async (data: object) => {
    const url = API_URL + '/api/v1/auth/password-reset-request';

    const response = await api.post(url, data);

    return response.data
}

export const resetPassword = async (id: string, token: string, password: string) => {
    const url = API_URL + `/api/v1/auth/password-reset/${id}/${token}`;

    const response = await api.post(url, { password: password });

    return response.data
}