import React, { Component } from 'react'
import ServicePersonaje from '../services/ServicePersonaje';
import ServiceSeries from '../services/ServiceSeries';
import { Navigate } from 'react-router-dom';
export default class CrearPersonajeComponent extends Component {
    service = new ServicePersonaje();
    serviceSeries = new ServiceSeries();
    cajaNombre = React.createRef();
    cajaImagen = React.createRef();
    cajaSerie = React.createRef();

    state = {
        mensaje: null,
        series: [],
        status: false
    }


    loadSeries = () => {
        this.serviceSeries.getSeries()
            .then((data) => {
                this.setState({
                    series: data,
                });
            })
            .catch((error) => {
                this.setState({
                    mensaje: error.message,
                });
            });
    }

    componentDidMount() {
        this.loadSeries();
        console.log("Component did mount");
    }

    insertPersonaje = (event) => {
        event.preventDefault();
        let Personaje = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            imagen: this.cajaImagen.current.value,
            serie: this.cajaSerie.current.value
        }

        console.log("Personaje a insertar: ", Personaje);
        this.service.insertPersonaje(Personaje)
            .then((result) => {
                console.log("Personaje insertado: ", result);
                this.setState({
                    status: true
                })
            }).catch((error) => {
                this.setState({
                    mensaje: error.message
                })
            })
        
    }

    render() {
        if (this.state.status === true){
            return (<Navigate to="/"/>)
        }else{
            return (
            <div style={{margin: "auto", width: "50%"}}>
                <h1>Create Personaje</h1>
                {
                    this.state.mensaje && 
                    (<p style={{color:"red", fontWeight: "bold"}}>
                        {this.state.mensaje}
                    </p>)
                }
                <form>
                    <label>Nombre: </label>
                    <input type="text" className='form-control'
                        ref={this.cajaNombre}/>
                    <label>Imagen: </label>
                    <input type="text" className='form-control'
                        ref={this.cajaImagen}/>
                    
                    <label>Serie: </label>
                    <select className='form-control' ref={this.cajaSerie}>
                        {
                            this.state.series.map((serie, index) => {
                                return (
                                    <option key={index} value={serie.idSerie}>
                                        {serie.nombre}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <br/>
                    <br/>
                    <button className='btn btn-warning' onClick={this.insertPersonaje}>
                        Insertar
                    </button>
                </form>
            </div>
            )
        }
    }
}