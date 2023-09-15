import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchByCountry } from '../../features/countries/countrySlice';
import Navbar from '../Navbar';

const Details = () => {
  const { isLoading, countryDetails } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { code } = useParams();

  useEffect(() => {
    if (code) {
      dispatch(searchByCountry(code.toLowerCase()));
    }
  }, [dispatch, code]);

  let content;

  if (isLoading) {
    content = <h1>Loading...</h1>;
  } else if (countryDetails.length > 0) {
    content = (
      <>
        <div>
          {/* Display country information */}
          <div className="detailTop">
            <h3 className="detailHeader">{countryDetails[0].name.common}</h3>
            <img src={countryDetails[0]?.flags?.png || 'No flags found'} alt={`The flag of ${countryDetails[0].name.common}`} />
          </div>
          <ul className="detailContainter">
            <li>
              <p>  Offcial Name:</p>
              <p>{countryDetails[0].name.official}</p>
            </li>
            <li>
              <p> population: </p>
              <p>{countryDetails[0].population}</p>
            </li>
            <li>
              <p>  Contenint:</p>
              <p>{countryDetails[0].continents}</p>
            </li>

            <li>
              <p> Time Zones: </p>
              <p>{countryDetails[0].timezones[0]}</p>
            </li>
            <li>
              <p> Capital:  </p>
              <p>{countryDetails[0].capital}</p>
            </li>
            <li>
              <p> Currencies: </p>
              <p>
                {Object.values(countryDetails[0].currencies)
                  .map((item) => item.name)
                  .join(', ')}
              </p>
            </li>
            <li>
              <p>Languages:</p>
              <p>
                {Object.values(countryDetails[0].languages)
                  .map((item) => item)
                  .join(', ')}
              </p>
            </li>
            <li>
              <p>Latitude & Longitude:</p>
              <p>
                {Object.values(countryDetails[0].latlng)
                  .map((item) => item)
                  .join(', ')}
              </p>
            </li>
            <li>
              <p>Area:</p>
              <p>
                {countryDetails[0].area}
              </p>
            </li>
          </ul>
        </div>
      </>
    );
  } else {
    content = <h1>No Info Found</h1>;
  }

  return (
    <section>
      <Navbar title={`Details ${countryDetails[0]?.name?.common || code}`} />
      <div className="homeBg">
        <h1 className="homeTitle"> </h1>
      </div>
      <div>{content}</div>
    </section>
  );
};

export default Details;
