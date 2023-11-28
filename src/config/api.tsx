import axios from "axios"

const api = axios.create({})

api.interceptors.request.use(
    (response) => response,
    (error) => {
        if(error.response && error.response.status === 401) {
            console.error(error)
        }

        return Promise.reject(error);
    }
)

export default api