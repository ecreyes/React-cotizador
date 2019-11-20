import React from 'react';
import Header from './Header';
import Body from './Body';

class CardCotizador extends React.Component {
    render() {
        return (
            <div className="card">
                <Header titulo="Cotizador de seguro de autos" />
                <Body/>
            </div>
        );
    }
}

export default CardCotizador;