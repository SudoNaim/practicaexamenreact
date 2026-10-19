import React, { Component } from 'react'
import ServiceSeries from '../services/ServiceSeries';
import { NavLink } from 'react-router-dom';
export default class SerieComponent extends Component {
    ServiceSeries = new ServiceSeries();
    state = {
        serie: {},
    }
    loadSerie = () => {
        let idSerie = this.props.idSerie;
        this.ServiceSeries.getSerie(idSerie).then((data) => {
            this.setState({
                serie: data,
            });
        });
    }
    componentDidMount() {
        this.loadSerie();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.idSerie !== this.props.idSerie) {
            this.loadSerie();
        }
    }
  render() {

    return (
      <div>
        <h1>{this.state.serie.nombre}</h1>
        <img src={this.state.serie.imagen} alt={this.state.serie.nombre} style={{ width: '200px', height: '200px' }}></img>
        <p>{this.state.serie.puntuacion}</p>
        <p>{this.state.serie.año}</p>
        <NavLink to={"/personajes/" + this.state.serie.idSerie}>
          <button>Ver personajes</button>
        </NavLink>
      </div>
    )
  }
}
