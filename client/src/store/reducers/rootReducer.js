import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import userReducer from "./userReducer";
import itemReducer from "./itemReducer";
import companyReducer from "./companyReducer";

const rootReducer = combineReducers({
    user: userReducer,
    transaction: transactionReducer,
    item: itemReducer,
    company: companyReducer
})

export default rootReducer