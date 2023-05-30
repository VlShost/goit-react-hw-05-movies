import { Suspense, useRef } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import css from './MovieInfo.module.css';
import placeholder from '../../imgs/posterPlaceholder.jpg';

const MovieInfo = ({ movie }) => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const imgUrl = `https://image.tmdb.org/t/p/w1280`;
  const imgPlaceholder = placeholder;

  if (!movie) {
    return (
      <>
        <h1>Sorry, no details on this movie yet</h1>
      </>
    );
  }

  const { title, vote_average, overview, genres, poster_path, backdrop_path } =
    movie;

  const formatDate = release_date => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const date = new Date(release_date);

    return date.toLocaleDateString('en-US', options);
  };
  const formattedDate = formatDate('2023-03-22');

  return (
    <>
      <Link
        className={css.navBtns}
        to={backLinkLocationRef.current}
        type="Link"
      >
        ← Go Back
      </Link>
      <div
        className={css.container}
        style={{ '--background-image-url': `url(${imgUrl}/${backdrop_path})` }}
      >
        <img
          src={poster_path ? imgUrl.concat(poster_path) : imgPlaceholder}
          alt="poster"
          width="350"
          className={css.poster}
        />
        <div className={css.wrapper}>
          <h1>
            {title} ({formattedDate})
          </h1>
          <h3 className={css.info}>
            User score: <p className={css.infoText}>{vote_average}</p>
          </h3>
          <h3 className={css.info}>
            Genres:
            {genres.map(genre => (
              <p key={genre.id} className={css.genres}>
                {genre.name}
              </p>
            ))}
          </h3>
          <h3>
            Overview: <p className={css.infoText}>{overview}</p>
          </h3>
        </div>
      </div>
      <ul className={css.btnList}>
        <li>
          <Link
            to={'credits'}
            state={backLinkLocationRef.current}
            className={css.navBtns}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={'reviews'}
            state={backLinkLocationRef.current}
            className={css.navBtns}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInfo;
