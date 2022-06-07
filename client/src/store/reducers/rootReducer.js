import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import userReducer from "./userReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
    user: userReducer,
    transaction: transactionReducer,
    item: itemReducer
})

export default rootReducer