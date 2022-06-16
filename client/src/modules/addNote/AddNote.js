import './addnote.css';

const AddNotes = () => {

    return (
        <div className='add_note_general'>
            <div className="card add_note">
                <label for="basic-url" className="form-label">Título:</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>
                <div className="form-floating">
                    <textarea className="form-control card-text" placeholder="Agrega contenido a tu nota" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Contenido</label>
                </div>
                <button type="button" className="btn btn-warning add_note_button" onClick={() => window.location = '/notes'}>Añadir nota</button>
            </div>
        </div>
    )
}

export default AddNotes;