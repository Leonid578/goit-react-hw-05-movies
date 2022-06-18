import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { findPopularFilms } from './fetchAPI';
import {BoxFilms} from '../Navigation/Navigation.style'

import { FilmCard } from '../FilmCard/FilmCard.jsx';

const HomeView = props => {
  const [popular, setPopular] = useState([]);
  const location = useLocation();

  useEffect(() => {
    findPopularFilms().then(returnAPI => {
      setPopular(returnAPI.results);
    });
  }, []);

  return (
    <>
      <h2>Popular films of the day</h2>

      {/* {console.log(popular)} */}
      {popular.length > 0 && (
        <BoxFilms>
          {popular.map(film => {
            return (
              <NavLink
                key={film.id}
                to={'movies/' + film.id}
                state={{ from: location }}
              >
                <FilmCard poster_path={film.poster_path} title={film.title} />
              </NavLink>
            );
          })}
        </BoxFilms>
      )}
    </>
  );
};

export default HomeView;
