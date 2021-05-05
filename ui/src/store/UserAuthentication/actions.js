import axiosInstance from "../../api/axiosInstance"

export const UPDATE_USER = "UPDATE_USER"

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user,
    }
}

export function loginUser(email, password){
    return dispatch => {
        axiosInstance.post()
    }
}

export function logoutUser(){
    return dispatch => {
        localStorage.removeItem('token')
        dispatch(updateUser(null))
    }
}
