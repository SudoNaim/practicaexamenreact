import React, { Component } from 'react'
import ServicePersonaje from '../services/ServicePersonaje';
export default class PersonajesComponent extends Component {
    ServicePersonaje = new ServicePersonaje();
    state = {
        personajes: [],
    }
    loadPersonajes = () => {
        let idSerie = this.props.idSerie;
        this.ServicePersonaje.getPersonajes(idSerie).then((data) => {
            this.setState({
                personajes: data,
            });
        });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.idSerie !== this.props.idSerie) {
            this.loadPersonajes();
        }
    }
    componentDidMount() {
        this.loadPersonajes();
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.personajes.map((personaje) => (
                            <tr key={personaje.id}>
                                <td>{personaje.nombre}</td>
                                <td>
                                    <img src={personaje.imagen} alt={personaje.nombre} style={{ width: '100px', height: '100px' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
