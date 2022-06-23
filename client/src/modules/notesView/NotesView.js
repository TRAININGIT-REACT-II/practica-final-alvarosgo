import { useState } from "react";
import { Redirect } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
import './notesview.css';

const NotesView = () => {

    return (
        <div className="notes_general">
            <button type="button" className="btn btn-info add_note_button" onClick={() => window.location = '/add-note'}>Crear nueva nota</button>
            <div className="card cardNote" onClick={() => window.location = '/detail-note'} >
                <h5 className="card-title">Título</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. </p>
            </div>

        </div>
    );
}

export default NotesView;