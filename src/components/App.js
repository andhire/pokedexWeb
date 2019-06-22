import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import Navbara from "./Navbar";
import Hoenn from "../pages/Hoenn";
import Alola from "../pages/Alola";
import Kalos from "../pages/Kalos";
import Johto from "../pages/Johto";
import Kanto from "../pages/Kanto";
import Sinnoh from "../pages/Sinnoh";
import Teselia from "../pages/Teselia";
function App() {
    return (
        <BrowserRouter>
            <Navbara />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/alola/" component={Alola} />
                <Route exact path="/hoenn/" component={Hoenn} />
                <Route exact path="/johto/" component={Johto} />
                <Route exact path="/kalos/" component={Kalos} />
                <Route exact path="/kanto/" component={Kanto} />
                <Route exact path="/sinnoh/" component={Sinnoh} />
                <Route exact path="/teselia/" component={Teselia} />
                <Route exact path="/:pokemonId/" component={Pokemon} />
                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
