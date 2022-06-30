import {
    GET_NOTES_REQUEST,
    GET_NOTES_RESPONSE
} from './actions';

const initialState = {
    notesList: []
}

const notes = (state = initialState, action) => {

    switch (action.type) {
        case GET_NOTES_REQUEST:
            return {
                ...state
            }
        case GET_NOTES_RESPONSE:
            return {
                ...state,
                notesList: action.resp
            }
        default:
            return state;
    }

}

export default notes;