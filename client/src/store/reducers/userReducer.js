import { REGISTER_ADMIN, LOGIN_ADMIN } from '../actions/actionType'

const initialState = {
    isRegister: false,
    isLogin: false,
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_ADMIN:
            return {
                ...state,
                isRegister: action.payload.isRegister
            };
        case LOGIN_ADMIN:
            return {
                ...state,
                isLogin: action.payload.isLogin
            };
        default:
            return state
    }
}

export default userReducer