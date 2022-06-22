import { useState } from 'react';
import './addnote.css';

const AddNotes = () => {

    const [formStateAdd, setFormStateAdd] = useState({ title: "", content: "" });

    const onChange = (key) => {
        return (e) => setFormStateAdd({
            ...formStateAdd,
            [key]: e.target.value
        });
    }

    const onSubmit = (e) => {
        console.log(formStateAdd.title)
        e.preventDefault();
    }

    return (
        <div className='add_note_general'>
            <form className="login_form" onSubmit={onSubmit}>
                <div className="card add_note">
                    <div className="input-group mb-3">
                        <input id="title" type="text" className="form-control" placeholder="Título" value={formStateAdd.title} onChange={onChange("title")} />
                    </div>
                    <div className="form-floating">
                        <textarea id="content" className="form-control card-text" placeholder="Agrega contenido a tu nota" value={formStateAdd.content} onChange={onChange("content")}> </textarea>
                        <label for="content">Contenido</label>
                    </div>
                    <button type="submit" className="btn btn-warning add_note_button" >Añadir nota</button>
                </div>
            </form>
        </div>
    )

}

export default AddNotes;