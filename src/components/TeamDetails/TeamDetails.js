import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faClock, faFlag, faFutbol, faMars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import female from "../../images/female.jpg";
import male from "../../images/male.jpg";
import Header from "../Header/Header";

const TeamDetails = () => {
    const [teamDetails, setTeamDetails] = useState([]);
    const {
        strTeam,
        intFormedYear,
        strCountry,
        strGender,
        strTeamBadge,
        strDescriptionEN,
        strSport,
        strFacebook,
        strTwitter,
        strInstagram,
        strYoutube,
    } = teamDetails;
    const gender = strGender || "";
    const { id } = useParams();
    const api = "https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=" + id;

    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => setTeamDetails(data.teams[0]))
            .catch((err) => console.log(err));
    }, [api]);

    return (
        <div className="text-white">
            <Header badge={strTeamBadge}></Header>
            <div className="container pt-3">
                <div className="row bg-success p-3 m-2 rounded-lg d-flex align-items-center">
                    <div className="col-md-6">
                        <h2>{strTeam}</h2>
                        <h5>
                            <FontAwesomeIcon icon={faClock} /> Founded: {intFormedYear}
                        </h5>
                        <h5>
                            <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
                        </h5>
                        <h5>
                            <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}
                        </h5>
                        <h5>
                            <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
                        </h5>
                    </div>
                    <div className="col-md-6">
                        <img
                            className="img-fluid"
                            height="200px"
                            src={gender.length && gender === "Female" ? female : male}
                            alt="..."
                        />
                    </div>
                </div>
                <p className="m-2 pt-3">{strDescriptionEN} </p>

                <div className="text-center pb-5 pt-3">
                    <a
                        className="h2 m-2"
                        href={"https://" + strFacebook}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                        className="h2 m-2"
                        href={"https://" + strTwitter}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        className="h2 m-2"
                        href={"https://" + strInstagram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        className="h2 m-2"
                        href={"https://" + strYoutube}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;
