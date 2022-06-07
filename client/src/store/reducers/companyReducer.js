import { GET_ALL_COMPANY, POST_NEW_COMPANY, DELETE_COMPANY, UPDATE_COMPANY, GET_COMPANY_BY_ID } from '../actions/actionType'

const initialState = {
    allCompany: [],
    companyById: {},
    isLoading: true,
    newCompany: false
}

function companyReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COMPANY:
            return {
                ...state,
                allCompany: action.payload.allCompany,
                isLoading: action.payload.isLoading
            };
        case POST_NEW_COMPANY:
            return {
                ...state,
                newCompany: action.payload.newCompany
            };
        case GET_COMPANY_BY_ID:
            return {
                ...state,
                companyById: action.payload.companyById,
                isLoading: action.payload.isLoading
            };
        default:
            return state
    }
}

export default companyReducer