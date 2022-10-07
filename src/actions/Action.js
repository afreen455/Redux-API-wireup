import * as ActionType from "../constants/ActionType";
import axios from "axios";

export const getData= () =>async (dispatch) => {
    await axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        dispatch({
            type: ActionType["GET_DATA"],
            payload: response.data,

        });
    })
    .catch((error) => {
        dispatch({
            type: ActionType["U_ERROR"],
            payload: error.response,
        });
    });
};