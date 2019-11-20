import React from 'react';

class Resumen extends React.Component {
    render() {
        const marca = this.props.resumen.marca;
        const anio = this.props.resumen.anio;
        const plan = this.props.resumen.plan;
        const precio = this.props.resumen.precio;
        if (precio === "") {
            return (
                null
            );
        } else {
            return (
                <div className="alert alert-success mt-3" role="alert">
                    <p>Marca: {marca}</p>
                    <p>Anio: {anio}</p>
                    <p>Plan: {plan}</p>
                    <p>Precio: {precio}</p>
                </div>
            );
        }
    }
}

export default Resumen;