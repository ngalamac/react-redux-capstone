/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import '../styles/Teams.css';

function Teams() {
  const teamsList = useSelector((state) => state.teams.teams);
  const isLoading = useSelector((state) => state.teams.loading);
  const isError = useSelector((state) => state.teams.error);
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{isError}</h1>;
  }

  return (
    <>
      <NavBar />
      <div className="search">
        <input type="text" placeholder="Enter a Team Name" value={search} onChange={handleSearch} />
      </div>
      <div className="teams">
        {teamsList
          .filter((team) => team.strTeam.toLowerCase().includes(search.toLowerCase()))
          .map((team) => (
            <Link to={`/team/${team.idTeam}`} key={team.idTeam}>
              <div className="team" key={team.id}>
                <img src={team.strTeamFanart3} alt="Fan" />
                <p>{team.strTeam}</p>
                <span>{team.strTeamShort}</span>
              </div>
            </Link>
          ))}
      </div>
    </>

  );
}

export default Teams;
