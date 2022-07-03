import {
    ADD_NOTE_REQUEST,
    ADD_NOTE_RESPONSE
} from './actions';

const initialState = {
    title: "",
    content: "",
    author: "",
    id: ""
}

const addNote = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NOTE_REQUEST:
            return {
                ...state
            }
        case ADD_NOTE_RESPONSE:
            return {
                ...state,
                title: action.resp?.title || null,
                content: action.resp?.content || null,
                author: action.resp?.author || null,
                id: action.resp?.id || null,
            }
        default:
            return state;
    }

}

export default addNote;