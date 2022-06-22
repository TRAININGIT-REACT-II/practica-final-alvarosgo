import { useEffect, useRef } from "react"
import { createPortal } from "react-dom";
import './deletemodal.css';

const DeleteModal = ({ show, onClose }) => {

    console.log(show)

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
            <div class="modal fade in" id="deleteModal" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={onClose}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            , modalRef.current
        );

    } else {
        return null;
    }

}

export default DeleteModal;