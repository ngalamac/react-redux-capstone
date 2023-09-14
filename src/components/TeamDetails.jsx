/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Team.css';
import BackNavigation from './BackNavigation';

function TeamDetails() {
  const { teamId } = useParams();
  const teamsList = useSelector((state) => state.teams.teams);
  const team = teamsList.find((team) => team.idTeam === teamId);

  if (!team) {
    return <h1>Team not found</h1>;
  }

  return (
    <>
      <BackNavigation />
      <div className="team-details">
        <img className="team-badge" src={team.strTeamBadge} alt={team.strTeam} />
        <div className="team-about">
          <h2>Team Name:</h2>
          <p>{team.strTeam}</p>
        </div>
        <div className="team-about">
          <h4>Year Formed:</h4>
          <p>{team.intFormedYear}</p>
        </div>
        <div className="team-about">
          <h4>Stadium:</h4>
          <p>{team.strStadium}</p>
        </div>
        <div className="team-about">
          <h4>Stadium Capacity:</h4>
          <p>{team.intStadiumCapacity}</p>
        </div>
        <div className="team-description">
          <h4>
            Description:
            <span>
              <ReactReadMoreReadLess
                charLimit={200}
                readMoreText="Read more ▼"
                readLessText="Read less ▲"
              >
                {team.strDescriptionEN}
              </ReactReadMoreReadLess>
            </span>
          </h4>
        </div>
        <div className="w-3/4 mx-auto my-8 team-carousel">
          <Carousel
            showArrows
            infiniteLoop
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img src={team.strTeamBadge} alt="Image Carousel" />
            </div>
            <div>
              <img src={team.strTeamJersey} alt="Image Carousel" />
            </div>
            <div>
              <img src={team.strTeamFanart1} alt="Image Carousel" />
            </div>
            <div>
              <img src={team.strTeamFanart2} alt="Image Carousel" />
            </div>
            <div>
              <img src={team.strTeamFanart3} alt="Image Carousel" />
            </div>
            <div>
              <img src={team.strTeamFanart4} alt="Image Carousel" />
            </div>
            <div>
              <img src={team.strTeamBanner} alt="Image Carousel" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default TeamDetails;
