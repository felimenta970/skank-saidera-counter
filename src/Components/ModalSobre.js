import React from 'react';

// Import do componente Modal e Botão do Bootstrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalSobre(props) {
    return (
        <Modal className="modalText"
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* Header com botão de close */}
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Sobre
                </Modal.Title>
            </Modal.Header>

            {/* Corpo do modal */}
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

                <h4>Código fonte</h4>
                <a href="https://github.com/felimenta970/skank-saidera-counter">https://github.com/felimenta970/skank-saidera-counter</a>
            </Modal.Body>

            {/* Footer do modal, com botão de close */}
            <Modal.Footer>
                <Button variant="dark" onClick={props.onHide}>Fechar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalSobre;