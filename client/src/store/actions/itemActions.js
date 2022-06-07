import { POST_NEW_ITEM, GET_ALL_ITEM, DELETE_ITEM, UPDATE_ITEM, GET_ITEM_BY_ID } from './actionType'
import axios from 'axios'
import Swal from 'sweetalert2'
const baseUrl = process.env.REACT_APP_URL

export const newItem = (payload) => {
    return {
        type: POST_NEW_ITEM,
        payload
    }
}
export const allItem = (payload) => {
    return {
        type: GET_ALL_ITEM,
        payload
    }
}
export const deletedItem = (payload) => {
    return {
        type: DELETE_ITEM,
        payload
    }
}

export const updatedItem = (payload) => {
    return {
        type: UPDATE_ITEM,
        payload
    }
}
export const selectedItem = (payload) => {
    return {
        type: GET_ITEM_BY_ID,
        payload
    }
}



export function postnewItem(itemData) {
    console.log(itemData);
    return async (dispatch) => {
        try {
            const response = await axios({
                url: `${baseUrl}/items`,
                method: "POST",
                headers: {
                    access_token: localStorage.getItem("user_token")
                },
                data: itemData
            })

            Swal.fire({
                title: 'Success!',
                text: `Success post new item`,
                icon: 'success',
                confirmButtonText: 'ok'
            })
            return dispatch(newItem({ newItem: true }))
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

export function deleteItem(itemId) {
    console.log(itemId, "<<<<");
    return async (dispatch) => {
        try {
            dispatch(allItem({ isLoading: true }))
            const response = await axios({
                url: `${baseUrl}/items/${itemId}`,
                method: "DELETE",
            })
            dispatch(getAllItem())
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Ooppss!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            dispatch(getAllItem())
        }
    }
}

export function getAllItem() {
    return async (dispatch) => {
        try {
            const response = await axios({
                url: `${baseUrl}/items`,
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("user_token")
                },
            })

            return dispatch(allItem({ allItem: response, isLoading: false }))
        } catch (error) {
            console.log(error);
        }
    }
}
export function getItemById(itemId) {
    return async (dispatch) => {
        try {
            dispatch(selectedItem({ isLoading: true }))
            const response = await axios({
                url: `${baseUrl}/items/${itemId}`,
                method: "GET",
                headers: {
                    access_token: localStorage.getItem("user_token")
                },
            })
            return dispatch(selectedItem({ itemById: response, isLoading: false }))
        } catch (error) {
            console.log(error);
        }
    }
}
export function updateItemById(itemId, itemData) {
    console.log(itemId, "===itemId");
    console.log(itemData, "===itemData");
    return async (dispatch) => {
        try {
            const response = await axios({
                url: `${baseUrl}/items/${itemId.itemId}`,
                method: "PUT",
                headers: {
                    access_token: localStorage.getItem("user_token")
                },
                data: itemData
            })
            return response
        } catch (error) {
            console.log(error);
        }
    }
}







