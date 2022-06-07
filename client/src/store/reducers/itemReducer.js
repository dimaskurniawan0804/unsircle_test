import { POST_NEW_ITEM, GET_ALL_ITEM, DELETE_ITEM, GET_ITEM_BY_ID, UPDATE_ITEM } from '../actions/actionType'

const initialState = {
    newItem: false,
    allItem: [],
    itemById: {},
    isLoading: true
}

function itemReducer(state = initialState, action) {
    switch (action.type) {
        case POST_NEW_ITEM:
            return {
                ...state,
                newItem: action.payload.newItem
            };
        case GET_ALL_ITEM:
            return {
                ...state,
                allItem: action.payload.allItem,
                isLoading: action.payload.isLoading
            };
        case DELETE_ITEM:
            return {
                ...state,
                isLoading: action.payload.isLoading
            };
        case GET_ITEM_BY_ID:
            return {
                ...state,
                itemById: action.payload.itemById,
                isLoading: action.payload.isLoading
            };
        default:
            return state
    }
}

export default itemReducer