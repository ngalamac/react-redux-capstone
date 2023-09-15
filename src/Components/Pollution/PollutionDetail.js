/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import GaugeChart from 'react-gauge-chart';

const PollutionDetail = ({ aqi, components }) => {
  let airQuality = '';

  if (aqi === 1) {
    airQuality = 'Good';
  } else if (aqi === 2) {
    airQuality = 'Fair';
  } else if (aqi === 3) {
    airQuality = 'Moderate';
  } else if (aqi === 4) {
    airQuality = 'Poor';
  } else {
    airQuality = 'Very Poor';
  }

  return (
    <div className="pollution_detail">
      <div>
        <div className="pollution__detail-gauge">
          <GaugeChart
            className="pollution_gauge"
            id="gauge-chart2"
            nrOfLevels={5}
            percent={aqi / 5}
            formatTextValue={(aqi) => 'AQI: '.concat('', aqi / 20)}
          />

        </div>
        <div className="pollution__detail-info">
          <p className="pollution__detail-index">
            Air Quality index:
            {' '}
            {aqi}
          </p>
          <p className="pollution__detail-quality">
            The Air Quality is:
            {' '}
            {airQuality}
          </p>
        </div>
      </div>

      <div className="pollution__detail-data">
        <h3>Pollutants</h3>
        <li className="pollution__detail-list">
          <span>Carbon monoxide:</span>
          <b>{components.co}</b>
        </li>
        <li className="pollution__detail-list">
          <span>Nitrogen monoxide:</span>
          <b>{components.no}</b>
        </li>
        <li className="pollution__detail-list">
          <span>Nitrogen dioxide:</span>
          <b>{components.no2}</b>
        </li>
        <li className="pollution__detail-list">
          <span>Ozone:</span>
          <b>{components.o3}</b>
        </li>
        <li className="pollution__detail-list">
          <span>Sulphur dioxide:</span>
          <b>{components.so2}</b>
        </li>
        <li className="pollution__detail-list">
          <span>Ammonia:</span>
          <b>{components.nh3}</b>
        </li>
        <li className="pollution__detail-list">
          <span>Particulates pm2_5:</span>
          <b>{components.pm2_5}</b>
        </li>
        <li className="pollution__detail-list">
          <span>Particulates pm10:</span>
          <b>{components.pm10}</b>
        </li>
      </div>

    </div>
  );
};

export default PollutionDetail;

PollutionDetail.propTypes = {
  aqi: PropTypes.number.isRequired,
  components: PropTypes.object.isRequired,
};
