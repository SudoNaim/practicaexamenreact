import axios from "axios";
import Global from "../Global";

export default class ServicePersonaje {
    getPersonajes (idSerie) {
        return new Promise(function(resolve) {
            let url = Global.urlApi;
            let request = "/api/Series/PersonajesSerie/" + idSerie;
            axios.get(url + request)
                .then(response => {
                    resolve(response.data);
                });
        });
    }

    insertPersonaje (personaje) {
        return new Promise(function(resolve, reject) {
            let url = Global.urlApi;
            let request = "/api/Personajes";
            axios.post(url + request, personaje)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}