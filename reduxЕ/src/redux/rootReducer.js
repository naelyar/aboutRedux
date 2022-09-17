import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./titleReducer";
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    appReducer
    
});