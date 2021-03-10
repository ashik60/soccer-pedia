import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NoMatch from "./components/NoMatch/NoMatch";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import Teams from "./components/Teams/Teams";

function App() {
    return (
        <div style={{ backgroundColor: "#1A0061" }}>
            <Router>
                <Switch>
                    <Route path="/teams">
                        <Teams />
                    </Route>
                    <Route path="/teamdetails/:id">
                        <TeamDetails />
                    </Route>
                    <Route exact path="/">
                        <Teams />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
