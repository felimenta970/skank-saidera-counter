import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalSobre(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sobre
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Desenvolvido por</h4>
                <p>
                    Felipe Pimenta - UNESP Rio Preto
                </p>

                <h4>Foto</h4>
                <p>
                    Indie CLicks
                </p>

                <h4>O Inter 2018</h4>
                <p>
                    Evento realizado por Criativa | O Inter
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalSobre;