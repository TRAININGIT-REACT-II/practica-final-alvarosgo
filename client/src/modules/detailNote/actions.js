import { TOKEN } from "../login/actions";

export const NOTE_DETAIL_REQUEST = 'NOTE_DETAIL_REQUEST';
export const NOTE_DETAIL_RESPONSE = 'NOTE_DETAIL_RESPONSE';
export const NOTE_DETAIL_ERROR = 'NOTE_DETAIL_ERROR';

export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST';
export const DELETE_NOTE_RESPONSE = 'DELETE_NOTE_RESPONSE';
export const DELETE_NOTE_ERROR = 'DELETE_NOTE_ERROR';

export const EDIT_NOTE_REQUEST = 'EDIT_NOTE_REQUEST';
export const EDIT_NOTE_RESPONSE = 'EDIT_NOTE_RESPONSE';
export const EDIT_NOTE_ERROR = 'EDIT_NOTE_ERROR';

export const getNoteDetail = (id) => {

    return dispatch => {
        dispatch({
            type: NOTE_DETAIL_REQUEST
        });

        fetch(API_URL + '/notes/' + id, {
            headers: {
                'api-token': localStorage.getItem(TOKEN),
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    dispatch({
                        type: NOTE_DETAIL_ERROR,
                        error: resp.error
                    });
                } else {
                    dispatch({
                        type: NOTE_DETAIL_RESPONSE,
                        resp
                    });
                }
            });
    };
}

export const deleteNote = (id) => {

    return dispatch => {
        dispatch({
            type: DELETE_NOTE_REQUEST
        });

        fetch(API_URL + '/notes/' + id, {
            method: 'DELETE',
            headers: {
                'api-token': localStorage.getItem(TOKEN)
            }
        }).then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    dispatch({
                        type: DELETE_NOTE_ERROR,
                        error: resp.error
                    });
                } else {
                    dispatch({
                        type: DELETE_NOTE_RESPONSE,
                        resp
                    });
                }
            });
    };
}

export const editNote = (id, note) => {

    return dispatch => {
        dispatch({
            type: EDIT_NOTE_REQUEST
        });

        fetch(API_URL + '/notes/' + id, {
            method: 'PUT',
            headers: {
                'api-token': localStorage.getItem(TOKEN),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                note
            )
        }).then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    dispatch({
                        type: EDIT_NOTE_ERROR,
                        error: resp.error
                    });
                } else {
                    dispatch({
                        type: EDIT_NOTE_RESPONSE,
                        resp
                    });
                }
            });
    };
}