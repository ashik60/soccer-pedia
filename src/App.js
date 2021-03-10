import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import React from "react";

function App() {
    return (
        <div className="bg-dark">
            <Header />
            <Home/>
        </div>
    );
}

export default App;
