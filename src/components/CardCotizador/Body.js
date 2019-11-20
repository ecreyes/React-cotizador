import React from 'react';
import Form from './Form';
import Resumen from './Resumen';

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            marca: "americano",
            anio: "2019",
            plan:"basico",
            precio:""
        };
        this.handleCotizarChange = this.handleCotizarChange.bind(this);
    }

    handleCotizarChange(data){
        let precio = Math.floor(Math.random() * 4000) + 1000;
        this.setState({
            marca:data.marca,
            anio:data.anio,
            plan:data.plan,
            precio: precio
        },()=>{
            console.log(this.state);
        });
    }

    render(){
        return(
            <div className="card-body">
                <Form onCotizarChange={this.handleCotizarChange}/>
                <Resumen resumen={this.state}/>
            </div>
        );
    }
}

export default Body;