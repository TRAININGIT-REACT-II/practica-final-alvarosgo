import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from './actions';
import './notesview.css';
import { getNotesState } from './selector';

const NotesView = () => {

    const [empty, setEmpty] = useState(true)

    const notesState = useSelector((state) => getNotesState(state))

    const dispatch = useDispatch();

    useEffect(() => {
        if (empty) {
            dispatch(getNotes())
        }
    }, [empty])

    useEffect(() => {
        if (notesState.notesList.length !== 0) {
            setEmpty(false)
        }
    }, [notesState.notesList])

    return (
        <div className="notes_general">
            <button type="button" className="btn btn-info add_note_button" onClick={() => window.location = '/add-note'}>Crear nueva nota</button>
            {!empty ? notesState.notesList.map((note, i) => <div key={i} className="card cardNote" onClick={() => window.location = '/detail-note/' + note.id} >
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.content}</p>
            </div>) : <div><p>Todavía no se han añadido notas</p></div>}
        </div>
    );
}

export default NotesView;