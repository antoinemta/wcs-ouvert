import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Accueil from "./components/Accueil";
import Inscription from "./components/Inscription";
import Connexion from "./components/Connexion";
import Contact from "./components/Contact";
import EspaceRH from "./components/EspaceRH";
import NouvelleEnquete from "./components/NouvelleEnquete";
import ListeEnquetesRH from "./components/ListeEnquetesRH";
import Geolocalisation from "./components/Geolocalisation";
import Sondage from "./components/Sondage";
import Resultat from "./components/Resultat";
import Assistance from "./components/Assistance";
import EspaceAdmin from "./components/EspaceAdmin";
import ListeEntreprises from "./components/ListeEntreprises";
import ListeEnquetes from "./components/ListeEnquetes";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authChecker.getUser() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/connexion",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const authChecker = {
  getUser() {
    return localStorage.getItem("currentUser", "token") || null;
  }
};

class App extends Component {
    render() {
      return (
        <div className="App">
          <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/inscription" component={Inscription} />
            <Route path="/connexion" component={Connexion} />