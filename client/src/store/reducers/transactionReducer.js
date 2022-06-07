import { FETCH_ALL_TRANSACTION } from '../actions/actionType'

const initialState = {
    allTransaction: []
}

function transactionReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_TRANSACTION:
            console.log(action.payload.allTransaction.data, '<<<<');
            return {
                ...state,
                allTransaction: action.payload.allTransaction
            };
        default:
            return state
    }
}

export default transactionReducer