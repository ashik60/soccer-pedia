import React from "react";
import "./Header.css";

const Header = (props) => {
    const { badge } = props;
    return (
        <div className="header container-fluid p-3 d-flex flex-row justify-content-center align-items-center">
            <div className="title">
                {badge ? (
                    <img width="200px" className="mx-auto d-block" src={props.badge} alt="..." />
                ) : (
                    <h1 className="mx-auto title text-white">SoccerPedia</h1>
                )}
            </div>
        </div>
    );
};

export default Header;
