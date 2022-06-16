import './detailnote.css';

const DetailNote = () => {

    return (
        <div className='detail_note_general'>
            <div className="card detail_note">
                <h5 for="basic-url" className="form-label detail_title ">TÍTULO</h5>
                <div className="form-floating">
                    <textarea className="form-control card-text" placeholder="Agrega contenido a tu nota" id="floatingTextarea">AQUI IRÍA EL CONTENIDO DE LA NOTA TRAIDO DESDE EL API</textarea>
                    <label for="floatingTextarea">Contenido</label>
                </div>
                <button type="button" className="btn btn-warning detail_note_button" onClick={() => window.location = '/notes'}>Añadir nota</button>
            </div>
        </div>
    )
}

export default DetailNote;