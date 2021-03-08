import logo from './logo.svg';

import React from 'react'

import Timer from './timeCounter.js';
import Footer from './Footer.js';

import Button from 'react-bootstrap/Button';

import ModalSobre from './ModalSobre.js';

import './App.css';

import bgi from './images/skank2.jpg';



function App() {

	const [modalShow, setModalShow] = React.useState(false);

	

	return (
		<div className="App">
			<div className="buttonLine">
				<Button variant="light" onClick={() => setModalShow(true)}>Sobre</Button>
			</div>
			
			<div className="content">
				<Timer />
			</div>
			
			<ModalSobre
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
			
		</div>
	);
}

export default App;
