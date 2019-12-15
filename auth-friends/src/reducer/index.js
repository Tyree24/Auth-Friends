import { LOGINFAILURE, LOGINSUCCESS, LOGINSTART } from '../actions'

const intialState = {
    data: [],
    error: "",
    isFetching: false,
    token: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGINSTART:
            return {
                ...state,
                isFetching: false,
                token: action.payload,
                error: ""
            };
        case LOGINSUCCESS:
            return {
                ...state,
                isFetching: false,
                token: action.payload,
                error: ""
            };
        case LOGINFAILURE:
            return {
                ...state,
                isFetching: false,
                token: action.payload,
                error: ""
            }
    };
                                default:
return state;