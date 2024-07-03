import service from "../utils/request";

export const token = (data) => {
    return service.post("/api/auth/token", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
};