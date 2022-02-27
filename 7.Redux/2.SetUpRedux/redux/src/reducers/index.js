import userReducer from "./user";
// tổng hợp các
import{combineReducers} from "redux";
import hobbyReducer from "./hobby";

const rootReducer = combineReducers({
    hobby : hobbyReducer,
    user : userReducer,
})

export default rootReducer;