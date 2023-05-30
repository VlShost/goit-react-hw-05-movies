import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'service/fetchMovies';
import css from './Credits.module.css';
import placeholder from '../../imgs/posterPlaceholder.jpg';

const Credits = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  const imgUrl = `https://image.tmdb.org/t/p/w200`;
  const imgPlaceholder = placeholder;

  useEffect(() => {
    getCredits(movieId)
      .then(data => setCredits(data.cast))
      .catch(error => console.error(error));
  }, [movieId]);

  if (credits.length === 0) {
    return (
      <>
        <h1>No information about cast for this movie</h1>
      </>
    );
  }

  return (
    <>
      <ul className={css.creditsList}>
        {credits.map(({ id, profile_path, name, character }) => (
          <li key={id} className={css.creditsItem}>
            <img
              src={profile_path ? imgUrl.concat(profile_path) : imgPlaceholder}
              alt={name}
              className={css.actorImg}
            />
            <div className={css.creditsInfoWrapper}>
              <p className={css.actor}>{name}</p>
              <p className={css.character}>Character: {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Credits;
