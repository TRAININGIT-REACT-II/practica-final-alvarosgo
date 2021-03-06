export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_RESPONSE = 'LOGIN_USER_RESPONSE';
export const LOGIN_USER_RESPONSE_ERROR = 'LOGIN_USER_RESPONSE_ERROR';
export const USER_INFO = 'USER_INFO';
export const TOKEN = 'TOKEN';

export const login = (credentials) => {

    return dispatch => {
        dispatch({
            type: LOGIN_USER_REQUEST
        });

        fetch(API_URL + '/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                credentials
            ),
        }).then(resp => resp.json())
            .then(resp => {

                if (resp.error) {
                    dispatch({
                        type: LOGIN_USER_RESPONSE_ERROR,
                        error: resp.error
                    });
                } else {
                    localStorage.setItem(USER_INFO, JSON.stringify(resp))
                    localStorage.setItem(TOKEN, resp?.token || null)
                    dispatch({
                        type: LOGIN_USER_RESPONSE,
                        resp
                    });
                }
            });
    };

}