import React from "react";

const Club = (props) => {
    const { strTeam, strTeamBadge, strSport } = props.team;
    console.log(props);
    return (
        <div className="card m-2 text-center" style={{ width: "15rem" }}>
            <img
                src={strTeamBadge}
                className="card-img-top mx-auto d-block mt-3"
                style={{ width: "10rem" }}
                alt="..."
            ></img>
            <div className="card-body">
                <h5 className="card-title">{strTeam}</h5>
                <p className="card-text">Sports Type: {strSport}</p>
            </div>
        </div>
    );
};

export default Club;
