import { TOKEN } from "../login/actions";

export const ADD_NOTE_REQUEST = 'ADD_NOTE_REQUEST';
export const ADD_NOTE_RESPONSE = 'ADD_NOTE_RESPONSE';
export const ADD_NOTE_ERROR = 'ADD_NOTE_ERROR';

export const addNote = (note) => {

    return dispatch => {

        dispatch({
            type: ADD_NOTE_REQUEST
        });

        fetch(API_URL + '/notes', {
            method: 'POST',
            headers: {
                'api-token': localStorage.getItem(TOKEN),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                note
            )
        }).then(resp => resp.json())
            .then(resp => {
                console.log(resp)

                if (resp) {
                    console.log('NO error')
                    dispatch({
                        type: ADD_NOTE_RESPONSE,
                        resp
                    });
                }
            })

    }

}