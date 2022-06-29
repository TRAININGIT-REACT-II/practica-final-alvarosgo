import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_RESPONSE,
    LOGIN_USER_RESPONSE_ERROR
} from './actions';

const initialState = {
    username: "",
    userId: -1,
    token: "",
    error: null
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return {
                ...state
            }
        case LOGIN_USER_RESPONSE:
            return {
                ...state,
                username: action.resp?.username || null,
                userId: action.resp?.id || null,
                token: action.resp?.token || null,
                error: null
            };
        case LOGIN_USER_RESPONSE_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default login;