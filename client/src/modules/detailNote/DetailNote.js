import { useEffect, useState } from 'react';
import { BsPencilFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import DeleteModal from '../../components/DeleteModal';
import { deleteNote, editNote, getNoteDetail } from './actions';
import './detailnote.css';
import { getDetailNoteState } from './selector';


const DetailNote = () => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [formState, setFormState] = useState({ title: "", content: "" });
    const [edit, setEdit] = useState(false);

    const detailNote = useSelector((state) => getDetailNoteState(state))

    const dispatch = useDispatch();

    var id = "";

    useEffect(() => {
        id = location.pathname.substring(13)
        dispatch(getNoteDetail(id));
    }, [])

    useEffect(() => {

        if (detailNote.error === null) {

            if (detailNote.title !== '' && detailNote.content !== '') {
                setFormState({
                    ...formState,
                    "title": detailNote.title,
                    "content": detailNote.content
                })
            }
        }

        if (detailNote.deleted !== null) {
            window.location = '/notes';
        }

    }, [detailNote]);

    useEffect(() => {

        if (detailNote.title !== detailNote.titleEdited
            || detailNote.content !== detailNote.contentEdited) {
            setFormState({
                ...formState,
                "title": detailNote.titleEdited,
                "content": detailNote.contentEdited
            })
        }

        if (detailNote.errorEdit === null &&
            (detailNote.title !== detailNote.titleEdited
                || detailNote.content !== detailNote.contentEdited)) {
            window.location = '/notes'
        }
    }, [detailNote.titleEdited, detailNote.contentEdited])

    const onChange = (key) => {
        return (e) => setFormState({
            ...formState,
            [key]: e.target.value
        });
    }

    const onDeleteNote = (id) => {
        dispatch(deleteNote(id))
    }

    const onSubmit = (e) => {
        let id = location.pathname.substring(13)
        setEdit(false)
        dispatch(editNote(id, formState))
        e.preventDefault();
    }

    return (
        <div className='detail_note_general'>
            <form className="detail_edit_form" onSubmit={onSubmit}>
                <div className="card detail_note">
                    <button className='btn btn-info edit_button' disabled={edit} onClick={() => {
                        if (!edit) {
                            setEdit(true)
                        }
                    }}>Editar nota</button>
                    <div className="input-group mb-3">
                        <input id="title" disabled={!edit} type="text" className="form-control" placeholder="Título" value={formState.title} onChange={onChange("title")} />
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control card-text detail_content" placeholder="Agrega contenido a tu nota" id="content" disabled={!edit} value={formState.content} onChange={onChange("content")}> </textarea>
                        <label htmlFor="content">Contenido</label>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto divButton">
                        <button type="submit" className="btn btn-success detail_note_button" disabled={!edit} >Guardar nota</button>
                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setShowDeleteModal(true)}>
                            Eliminar nota
                        </button>
                    </div>
                    <DeleteModal show={showDeleteModal} onClose={() => setShowDeleteModal(false)} onDelete={() => {
                        let id = location.pathname.substring(13)
                        onDeleteNote(id);
                    }} />
                </div>
            </form>
        </div>
    )
}

export default DetailNote;