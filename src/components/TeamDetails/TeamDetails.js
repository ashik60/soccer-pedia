import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeamDetails = () => {
    const [details, setDetails] = useState([]);
    const { strTeam, intFormedYear, strCountry, strGender, strDescriptionEN, strSport } = details;
    const { id } = useParams();
    const api = "https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=" + id;

    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => setDetails(data.teams[0]))
            .catch((err) => console.log(err));
    }, [api]);

    return (
        <div className="text-white">
            <h1>{id}</h1>
            <h1>{strTeam}</h1>
            <h1>{intFormedYear}</h1>
            <h1>{strCountry}</h1>
            <h1>{strSport}</h1>
            <h1>{strGender}</h1>
            <p>{strDescriptionEN} </p>
        </div>
    );
};

export default TeamDetails;
