import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import Navbara from "./Navbar";
function App() {
    return (
        <BrowserRouter>
            <Navbara />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:pokemonId/" component={Pokemon} />
                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
