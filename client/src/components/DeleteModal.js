import { useEffect, useRef } from "react"
import { createPortal } from "react-dom";
import './deletemodal.css';

const DeleteModal = ({ show, onClose, onDelete }) => {

    const modalRef = useRef(null);

    const modalGroupRef = useRef(document.getElementById("modals"));

    useEffect(() => {
        const modalElement = document.createElement("div");
        modalElement.classList.add("modal-hidden");
        modalGroupRef.current.appendChild(modalElement);
        modalRef.current = modalElement;

        return () => modalGroupRef.current.removeChild(modalRef.current);
    }, [])

    useEffect(() => {
        if (modalRef.current != null) {
            if (show) {
                modalRef.current.classList.remove("modal-hidden");
            } else {
                modalRef.current.classList.add("modal-hidden");
            }
        }
    }, [show])

    if (show && modalRef.current != null) {
        return createPortal(
            <div>
                <div className="modal fade show" style={{ display: "block" }} id="deleteModal" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={onClose}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Eliminar nota</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ¿Esta seguro que desea eliminar la nota?
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={onClose} className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" onClick={onDelete} className="btn btn-primary">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show"></div>
            </div>
            , modalRef.current
        );

    } else {
        return null;
    }

}

export default DeleteModal;