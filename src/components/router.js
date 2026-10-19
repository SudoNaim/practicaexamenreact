import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import { useParams } from 'react-router-dom';
import SerieComponent from './SerieComponent';
import PersonajesComponent from './PersonajesComponent';
import CrearPersonajeComponent from './CrearPersonajeComponent';
export default class Router extends Component {
    render() {

        function SerieElement() {
            let {idSerie} = useParams();
            console.log("LLEGO A LA FUNCION DE SERIECOMPONENT");
            //return <SerieComponent idSerie={idSerie} />
            return <SerieComponent idSerie={idSerie} />
        }

        function PersonajesElement() {
            let {idSerie} = useParams();
            console.log("LLEGO A LA FUNCION DE PERSONAJESCOMPONENT");
            return <PersonajesComponent idSerie={idSerie} />
        }
        

        return (
            <BrowserRouter>
                <MenuComponent/>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/series/:idSerie" element={<SerieElement/>}/>
                    <Route path="/personajes/:idSerie" element={<PersonajesElement/>}/>
                    <Route path="/crearpersonaje" element={<CrearPersonajeComponent/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}