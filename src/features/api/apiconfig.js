import axios from "axios"

export default async function setLogin(data) {
    const URL = "https://dummyjson.com/auth/login"
    const response = await axios.post(URL, data).catch((err) => err.response);
    if (response.status > 300) {
        const res = {
            error: true,
            message: response.data.message,
            data: null
        }
        return res;
    }
    const res = {
        error: false,
        message: 'success',
        data: response.data
    };
    return res;
}