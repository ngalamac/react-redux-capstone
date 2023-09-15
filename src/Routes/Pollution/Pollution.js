import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PollutionDetail from '../../Components/Pollution/PollutionDetail';
import fetchAirPollution from '../../Services/airPollutionAPI';

const Pollution = () => {
  const [loader, setLoader] = useState(false);

  const {
    country, latitude, longitude,
  } = useParams();

  const airPollution = useSelector((state) => state.pollution.pollution);
  const loading = useSelector((state) => state.pollution.status);
  const dispatch = useDispatch();

  const coord = {
    latitude,
    longitude,
  };

  useEffect(() => {
    dispatch(fetchAirPollution(coord));
  }, []);

  useEffect(() => {
    if (loading !== 'uploaded') {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [loading]);

  return (
    <>
      <h2 className="pollution__details-country">
        {country}
      </h2>
      {
        loader ? (
          <div className="progress__container">
            <div className="progress" />
          </div>
        )
          : (
            <ul>
              {airPollution.map((pollution) => (
                <PollutionDetail
                  key={country}
                  aqi={pollution.aqi}
                  components={pollution.components}
                />
              ))}
            </ul>
          )
      }

    </>
  );
};

export default Pollution;
