import { useEffect, useState } from 'react';
import { BsPencilFill } from "react-icons/bs";
import './detailnote.css';


const DetailNote = () => {

    const [formState, setFormState] = useState({ title: "", content: "" });
    const [edit, setEdit] = useState(false);

    const onChange = (key) => {
        return (e) => setFormState({
            ...formState,
            [key]: e.target.value
        });
    }

    const onSubmit = (e) => {
        console.log(formState.title)
        console.log(formState.content)
        e.preventDefault();
    }

    return (
        <div className='detail_note_general'>
            <form className="login_form" onSubmit={onSubmit}>
                <div className="card detail_note">
                    <BsPencilFill className='edit_button' disabled={!edit} onClick={() => {
                        if (!edit) {
                            setEdit(true)
                        }
                    }}></BsPencilFill>
                    <div className="input-group mb-3">
                        <input id="title" disabled={!edit} type="text" className="form-control" placeholder="Título" value={formState.title} onChange={onChange("title")} />
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control card-text" placeholder="Agrega contenido a tu nota" id="content" disabled={!edit} value={formState.content} onChange={onChange("content")}> </textarea>
                        <label for="content">Contenido</label>
                    </div>
                    {edit && <button type="submit" className="btn btn-outline-primary detail_note_button" >Guardar nota</button>}
                </div>
            </form>
        </div>
    )
}

export default DetailNote;