import { USER_INFO } from "../modules/login/actions";

export const getUserInfo = () => {
    let userInfo = localStorage.getItem(USER_INFO);
    return userInfo != null ? JSON.parse(userInfo) : null;
};