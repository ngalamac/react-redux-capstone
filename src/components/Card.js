import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { getCountries, searchByRegion } from '../features/countries/countrySlice';

const Card = () => {
  const {
    countries, isLoading, success, region,
  } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    if (region !== '') {
      dispatch(searchByRegion(region));
    } else { dispatch(getCountries()); }
  }, [dispatch, success, region]);

  return (
    <>
      {isLoading ? (<h1>Loading...</h1>) : (
        <div className="cardContainer">
          {countries.length > 0 && countries.map((country) => (
            <div className="cardBg" key={country.cca3}>
              <Link to={`/${country.cca3}`}>
                <BsArrowRightCircle />
                <div>
                  <h3>{country.name.common}</h3>
                  <p>
                    <span>{country.population}</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Card;
