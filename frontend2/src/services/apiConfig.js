import axios from 'axios';

let apiUrl;

const apiUrls = {
production: "https://software-dev-quotes-api.herokuapp.com",
development: "https://software-dev-quotes-api.herokuapp.com"

};

if  (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development
}
    else {
        apiUrl =apiUrls.production
    }

    const api = axios.create({

        baseURL: apiUrl,
    }

    );

    export default api;