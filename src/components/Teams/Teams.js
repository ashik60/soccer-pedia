import React, { useEffect, useState } from "react";
import Club from "../Club/Club";

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch(
            "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
        )
            .then((res) => res.json())
            .then((data) => setTeams(data.teams))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {teams.map((team) => (
                <Club key={team.idTeam} team={team} />
            ))}
        </div>
    );
};

export default Teams;
