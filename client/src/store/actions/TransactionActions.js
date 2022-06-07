import { FETCH_ALL_TRANSACTION } from './actionType'
import axios from 'axios'
const baseUrl = process.env.REACT_APP_URL

export const transactionDatas = (payload) => {
    return {
        type: FETCH_ALL_TRANSACTION,
        payload
    }
}

export function fetchAllTransaction() {
    return async (dispatch) => {
        try {
            const response = await axios({
                url: `${baseUrl}/transaction`,
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("user_token")
                }
            })
            return dispatch(transactionDatas({ allTransaction: response }))
        } catch (error) {
            console.log(error);
            // return dispatch(checkRegister({ isRegister: false }))
        }
    }
}