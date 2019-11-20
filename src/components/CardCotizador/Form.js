import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marca:"americano",
            anio:"2019",
            plan:"basico"
        }
        this.handleChangeMarca = this.handleChangeMarca.bind(this);
        this.handleChangeAnio = this.handleChangeAnio.bind(this);
        this.handleChangePlan = this.handleChangePlan.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeMarca(e) {
        this.setState({
            marca:e.target.value
        });
    }

    handleChangeAnio(e) {
        this.setState({
            anio:e.target.value
        });
    }

    handleChangePlan(e){
        this.setState({
            plan:e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onCotizarChange(this.state);
    }

    render() {
        const marca = this.state.marca;
        const anio = this.state.anio;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="marca" className="col-sm-2 col-form-label">Marca</label>
                    <div className="col-sm-10">
                        <select id="marca" value={marca} onChange={this.handleChangeMarca} className="custom-select">
                            <option value="americano">Americano</option>
                            <option value="europeo">Europeo</option>
                            <option value="asia">Asiatico</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="anio" className="col-sm-2 col-form-label">Año</label>
                    <div className="col-sm-10">
                        <select id="anio" value={anio} onChange={this.handleChangeAnio} className="custom-select">
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="plan" className="col-sm-2 col-form-label">Plan</label>
                    <div className="col-sm-10" onChange={this.handleChangePlan}>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name="inlineRadioOptions" type="radio" id="planbasico" value="basico"/>
                            <label className="form-check-label" htmlFor="planbasico">Basico</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"  name="inlineRadioOptions" type="radio" id="plancompleto" value="completo"/>
                            <label className="form-check-label" htmlFor="plancompleto">Completo </label>
                        </div>
                    </div>
                </div>
                <input className="btn btn-outline-primary btn-block" type="submit" value="Cotizar" />
            </form>
        );
    }
}

export default Form;