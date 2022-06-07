import { GET_ALL_COMPANY, POST_NEW_COMPANY, DELETE_COMPANY, UPDATE_COMPANY, GET_COMPANY_BY_ID } from './actionType'
import axios from 'axios'
import Swal from 'sweetalert2'
const baseUrl = process.env.REACT_APP_URL

export const allCompany = (payload) => {
    return {
        type: GET_ALL_COMPANY,
        payload
    }
}
export const newCompany = (payload) => {
    return {
        type: POST_NEW_COMPANY,
        payload
    }
}

export const selectedCompany = (payload) => {
    return {
        type: GET_COMPANY_BY_ID,
        payload
    }
}



export function getAllCompany() {
    return async (dispatch) => {
        try {
            const response = await axios({
                url: `${baseUrl}/company`,
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("user_token")
                },
            })

            return dispatch(allCompany({ allCompany: response, isLoading: false }))
        } catch (error) {
            console.log(error);
        }
    }
}

export function postnewCompany(companyData) {
    return async (dispatch) => {
        try {
            const response = await axios({
                url: `${baseUrl}/company`,
                method: "POST",
                headers: {
                    access_token: localStorage.getItem("user_token")
                },
                data: companyData
            })

            Swal.fire({
                title: 'Success!',
                text: `Success post new company`,
                icon: 'success',
                confirmButtonText: 'ok'
            })
            return dispatch(newCompany({ newCompany: true }))
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Ooppss!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }
}

export function deleteCompany(companyId) {
    console.log(companyId, "<<<<");
    return async (dispatch) => {
        try {
            dispatch(allCompany({ isLoading: true }))
            const response = await axios({
                url: `${baseUrl}/company/${companyId}`,
                method: "DELETE",
            })
            dispatch(getAllCompany())
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Ooppss!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            dispatch(getAllCompany())
        }
    }
}

export function getCompanyById(companyId) {
    return async (dispatch) => {
        try {
            dispatch(selectedCompany({ isLoading: true }))
            const response = await axios({
                url: `${baseUrl}/company/${companyId}`,
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("user_token")
                },
            })
            return dispatch(selectedCompany({ companyById: response, isLoading: false }))
        } catch (error) {
            console.log(error);
        }
    }
}

export function updateCompanyById(companyId, companyData) {
    console.log(companyId, "<<<<id");
    console.log(companyData, "<<<<data");
    return async (dispatch) => {
        try {
            const response = await axios({
                url: `${baseUrl}/company/${companyId.companyId}`,
                method: "PUT",
                headers: {
                    access_token: localStorage.getItem("user_token")
                },
                data: companyData
            })
            return response
        } catch (error) {
            console.log(error);
        }
    }
}