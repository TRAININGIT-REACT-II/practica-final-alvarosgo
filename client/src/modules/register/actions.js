
export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_RESPONSE = 'REGISTER_USER_RESPONSE';
export const REGISTER_USER_RESPONSE_ERROR = 'REGISTER_USER_RESPONSE_ERROR';
export const TOKEN = 'TOKEN';

export const register = (credentials) => {

    return dispatch => {
        dispatch({
            type: REGISTER_USER_REQUEST
        });

        fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                credentials
            ),
        }).then(resp => resp.json())
            .then(resp => {

                console.log(resp)

                if (resp.error) {
                    console.log('ERROR')
                    dispatch({
                        type: REGISTER_USER_RESPONSE_ERROR,
                        error: resp.error
                    });
                } else {
                    console.log('NO error')
                    dispatch({
                        type: REGISTER_USER_RESPONSE,
                        resp
                    });
                }
            });
    };

}