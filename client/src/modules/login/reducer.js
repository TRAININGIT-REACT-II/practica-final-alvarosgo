import { getUserInfo } from '../../utils/ApplicationUtils';
import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_RESPONSE,
    LOGIN_USER_RESPONSE_ERROR
} from './actions';

const initialState = {
    userInfo: getUserInfo(),
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
                userInfo: action.resp,
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