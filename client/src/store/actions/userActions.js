import { REGISTER_ADMIN, LOGIN_ADMIN } from './actionType'
import axios from 'axios'
import Swal from 'sweetalert2'
const baseUrl = process.env.REACT_APP_URL

export const checkRegister = (payload) => {
    return {
        type: REGISTER_ADMIN,
        payload
    }
}

export const checkLogin = (payload) => {
    return {
        type: LOGIN_ADMIN,
        payload
    }
}

export function registerAdmin(userData) {
    return async (dispatch) => {
        try {
            const response = await axios({
                url: `${baseUrl}/users/register`,
                method: "POST",
                data: userData
            })

            Swal.fire({
                title: 'Success Register!',
                text: '',
                icon: 'success',
                confirmButtonText: 'Cool'
            })

            dispatch(checkRegister({ isRegister: true }))
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return dispatch(checkRegister({ isRegister: false }))
        }
    }
}

export function loginAdmin(userData) {
    return async (dispatch) => {
        try {
            const response = await axios({
                url: `${baseUrl}/users/login`,
                method: "POST",
                data: userData
            })
            Swal.fire({
                title: 'Succes Login!',
                text: `Hi,${response.data.name}`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })

            localStorage.setItem("user_token", response.data.access_token)
            localStorage.setItem("user_role", response.data.role)
            localStorage.setItem("user_id", response.data.id)

            return dispatch(checkLogin({ isLogin: true }))
        } catch (error) {

            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            return dispatch(checkLogin({ isLogin: false }))
        }
    }
}