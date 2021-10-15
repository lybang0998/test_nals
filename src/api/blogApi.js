import axiosClient from "./axiosClient";

const blogApi = {
    getAll : (params) => {
        const url = '/blogs';
        return axiosClient.get(url, { params });
    },
    getBlogById: id => {
        const url = `/blogs/${id}`;
        return axiosClient.get(url)
    }
}

export default blogApi;