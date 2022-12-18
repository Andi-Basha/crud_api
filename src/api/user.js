import api from "./api";

export const loginRequest = (formData) => {
    return api.post(`auth/login`, formData);
}