import axios from "axios";
import Global from "../Global";

export default class ServiceSeries {
    getSeries () {
        return new Promise(function(resolve, reject) {
            let url = Global.urlApi;
            let request = "/api/Series";
            axios.get(url + request)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    getSerie (idSerie) {
        return new Promise(function(resolve) {
            let url = Global.urlApi;
            let request = "/api/Series/" + idSerie;
            axios.get(url + request)
                .then(response => {
                    resolve(response.data);
                });
        });
    }
}