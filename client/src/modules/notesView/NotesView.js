import './notesview.css';

const NotesView = () => {

    return (
        <div>
            <button type="button" className="btn btn-outline-primary">Crear nueva nota</button>
            <div className="card cardNote">
                <div className="card-body">
                    <h5 className="card-title">Título</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
}

export default NotesView;