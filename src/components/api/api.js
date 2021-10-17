import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fe6a3390-fecf-41df-a390-fce4fbb45960'
    }
})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    addFollow(userId = 1) {
        return instance
            .post(`follow/${userId}`, {},)
            .then(response => {
                return response.data
            })
    },

    deleteFollow(userId = 1) {
        return instance
            .delete(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    },

    getUserProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}
