import { useState } from "react";
import { Redirect } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
import './notesview.css';

const NotesView = () => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <div>
            <button type="button" className="btn btn-outline-primary" onClick={() => window.location = '/add-note'}>Crear nueva nota</button>
            <div className="card cardNote" /* onClick={() => window.location = '/detail-note'} */>
                <div className="card-body">
                    <h5 className="card-title">Título</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setShowDeleteModal(true)}>
                        Eliminar nota
                    </button>
                </div>
            </div>
            <DeleteModal show={showDeleteModal} onClose={() => setShowDeleteModal(false)} />
        </div>
    );
}

export default NotesView;