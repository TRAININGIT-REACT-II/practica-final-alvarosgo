import {
    NOTE_DETAIL_REQUEST,
    NOTE_DETAIL_RESPONSE,
    NOTE_DETAIL_ERROR,
    DELETE_NOTE_REQUEST,
    DELETE_NOTE_RESPONSE,
    DELETE_NOTE_ERROR,
    EDIT_NOTE_REQUEST,
    EDIT_NOTE_RESPONSE,
    EDIT_NOTE_ERROR
} from './actions';

const initialState = {
    title: "",
    content: "",
    author: "",
    deleted: null,
    error: null,
    errorDelete: null,
    errorEdit: null,
    titleEdited: "",
    contentEdited: "",
    authorEdited: ""
}

const detailNote = (state = initialState, action) => {

    switch (action.type) {
        case NOTE_DETAIL_REQUEST:
            return {
                ...state
            }
        case NOTE_DETAIL_RESPONSE:
            return {
                ...state,
                title: action.resp?.title || null,
                content: action.resp?.content || null,
                author: action.resp?.author || null,
                titleEdited: action.resp?.title || null,
                contentEdited: action.resp?.content || null,
                authorEdited: action.resp?.author || null
            }
        case NOTE_DETAIL_ERROR:
            return {
                ...state,
                error: action.error
            };
        case DELETE_NOTE_REQUEST:
            return {
                ...state
            }
        case DELETE_NOTE_RESPONSE:
            return {
                ...state,
                deleted: action.resp
            }
        case DELETE_NOTE_ERROR:
            return {
                ...state,
                errorDelete: action.error
            };
        case EDIT_NOTE_REQUEST:
            return {
                ...state
            }
        case EDIT_NOTE_RESPONSE:
            return {
                ...state,
                titleEdited: action.resp?.title || null,
                contentEdited: action.resp?.content || null,
                authorEdited: action.resp?.author || null
            }
        case EDIT_NOTE_ERROR:
            return {
                ...state,
                errorEdit: action.error
            };
        default:
            return state;
    }
}

export default detailNote;