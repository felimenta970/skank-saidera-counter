import React from 'react';

// Import do componente com textos de timer
import Timer from './timeCounter.js';

// Import do botão do Bootstrap
import Button from 'react-bootstrap/Button';

// Import do componente Modal
import ModalSobre from './ModalSobre.js';

// Import css
import './App.css';

function App() {

	// Use state do React para controle de mostrar ou não o modal
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<div className="App">

			{/* Componente do botão com a chamada para o modal */}
			<div className="buttonLine">
				<Button variant="light" onClick={() => setModalShow(true)}>Sobre</Button>
			</div>
			
			{/* O texto de timer */}
			<div className="content">
				<Timer />
			</div>

			{/* Modal customizado, só aparece ao clicar no botão */}
			<ModalSobre
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			
		</div>
	);
}

export default App;