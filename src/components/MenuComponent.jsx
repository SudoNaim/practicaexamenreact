import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';
import ServiceSeries from '../services/ServiceSeries';
class MenuComponent extends Component {
    serviceSeries = new ServiceSeries();
    url = Global.urlApi;
    state = {
        series: [],
    }
    loadSeries = () => {
        this.serviceSeries.getSeries().then((data) => {
            this.setState({
                series: data,
            });
        });
    }

    componentDidMount() {
        this.loadSeries();
    }

    render() {
        return (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
                <div>
                </div>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '15px', margin: 0, padding: 0 }}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <ul>
                            {this.state.series.map((serie) => (
                                <li key={serie.id}>
                                    <NavLink to={`/series/${serie.idSerie}`}>{serie.nombre}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/crearpersonaje">Crear Personaje</NavLink>
                    </li>
                    <li>
                        <NavLink to="/vacio">vacio</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MenuComponent
