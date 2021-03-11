import React from "react";
import { Link } from "react-router-dom";

const Club = (props) => {
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;

    return (
        <div className="card background text-white m-2 text-center" style={{ width: "15rem" }}>
            <img
                src={strTeamBadge}
                className="card-img-top mx-auto img-fluid d-block mt-3"
                style={{ width: "8rem" }}
                alt="..."
            ></img>
            <div className="card-body">
                <h5 className="card-title">{strTeam}</h5>
                <p className="card-text">Sports Type: {strSport}</p>
                <Link to={"/teamdetails/" + idTeam} className="btn btn-success">
                    Explore →
                </Link>
            </div>
        </div>
    );
};

export default Club;
