import React from 'react';
import './Header.css';

function Header(props) {
	return (
		<div className="card-header bg-primary text-white">
			{props.titulo}
		</div>
	);
}

export default Header;
