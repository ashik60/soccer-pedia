import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import TeamDetails from "../TeamDetails/TeamDetails";
import Teams from "../Teams/Teams";

const Home = () => {
    return (
        <div>
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
                </Switch>
            </Router>
        </div>
    );
};

export default Home;
