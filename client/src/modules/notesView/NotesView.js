import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from './actions';
import './notesview.css';
import { getNotesState } from './selector';

const NotesView = () => {

    const [empty, setEmpty] = useState(true)

    const notesState = useSelector((state) => getNotesState(state))

    const notesList = []

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotes())

        if (notesState.notesList.length === 0) {
            setEmpty(true)
        } else {
            setEmpty(false)
            notesList = notesState.notesList
        }

    }, notesState)

    /*const note1 = {
        title: "Titulo1",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
    const note2 = {
        title: "Titulo2",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
    const note3 = {
        title: "Titulo3",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
    const note4 = {
        title: "Titulo4",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }

    notesList.push(note1)
    notesList.push(note2)
    notesList.push(note3)
    notesList.push(note4) */

    return (
        <div className="notes_general">
            <button type="button" className="btn btn-info add_note_button" onClick={() => window.location = '/add-note'}>Crear nueva nota</button>
            {!empty ? notesList.map((note) => <div className="card cardNote" onClick={() => window.location = '/detail-note'} >
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.content}</p>
            </div>) : <div><p>Lista vacía</p></div>}
        </div>
    );
}

export default NotesView;