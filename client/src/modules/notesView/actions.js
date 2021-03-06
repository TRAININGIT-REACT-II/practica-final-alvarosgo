import { TOKEN } from "../login/actions";

export const GET_NOTES_REQUEST = 'GET_NOTES_REQUEST';
export const GET_NOTES_RESPONSE = 'GET_NOTES_RESPONSE';
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR';

export const getNotes = () => {

    return dispatch => {

        dispatch({
            type: GET_NOTES_REQUEST
        });

        fetch(API_URL + '/notes', {
            headers: {
                'api-token': localStorage.getItem(TOKEN),
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json())
            .then(resp => {
                if (resp) {
                    dispatch({
                        type: GET_NOTES_RESPONSE,
                        resp
                    });
                }
            })
    }
}