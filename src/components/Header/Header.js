import React from "react";
import "./Header.css";

const Header = (props) => {
    const { badge } = props;
    // setBadge(props.badge);
    return (
        <div className="header text-white container-fluid p-3 d-flex flex-row justify-content-center align-items-center">
            <div className="">
                {badge ? (
                    <img width="200px" className="mx-auto d-block" src={props.badge} alt="..." />
                ) : (
                    <h1 className="mx-auto">Crazzy Football</h1>
                )}
            </div>
        </div>
    );
};

export default Header;
