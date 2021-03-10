import React from "react";
import "./Header.css";

const Header = (props) => {
    const { badge } = props;
    return (
        <div className="header container-fluid p-3 d-flex flex-row justify-content-center align-items-center">
            <div>
                {badge ? (
                    <img width="200px" className="mx-auto d-block" src={props.badge} alt="..." />
                ) : (
                    <h1 className="mx-auto text-danger">English Premier League</h1>
                )}
            </div>
        </div>
    );
};

export default Header;
