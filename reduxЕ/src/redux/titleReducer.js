import { INPUT_TEXT} from "./types";

const initialstate = {
    text: ""
}

export const inputReducer = (state = initialstate, action) => {
    // console.log("inputReducer >" , action);
    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,
                text: action.text
            }
        
        default:
       return state;
    }
     

}