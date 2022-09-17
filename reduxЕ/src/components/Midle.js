import {  errorOn } from "../redux/action";
import { COMMENT_CREATE } from "../redux/types";
const badWords = ["козел" ,"дурак"]

export function spamFilter({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === COMMENT_CREATE) {
                console.log("spanFilter", action.data.text);
                const hasBadWords = badWords.some(res => action.data.text.includes(res))
                if (hasBadWords) {
                    return dispatch(errorOn("только добрые слова"))
                }
               
            }
            return next(action);
        }
    }
}