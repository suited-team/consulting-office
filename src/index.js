import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import {
    Route,
    Link
} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';




ReactDOM.render(
    <App /> ,
    document.getElementById("root"));
