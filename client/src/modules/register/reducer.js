import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_RESPONSE,
    REGISTER_USER_RESPONSE_ERROR,
    TOKEN
} from './actions';

const initialState = {
    username: "",
    userId: -1,
    token: "",
    error: null
};

const register = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state
            }
        case REGISTER_USER_RESPONSE:
            return {
                ...state,
                username: action.resp?.username || null,
                userId: action.resp?.id || null,
                token: action.resp?.token || null,
                error: null
            };
        case REGISTER_USER_RESPONSE_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default register;