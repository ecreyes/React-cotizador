import React from 'react';
import './App.css';

import CardCotizador from './CardCotizador/CardCotizador';

function App() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-6"><CardCotizador /></div>
				<div className="col-6"><CardCotizador /></div>
			</div>
		</div>
	);
}

export default App;
