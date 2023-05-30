import { Link, useLocation } from 'react-router-dom';
import css from './SearchedMovieList.module.css';
import placeholder from '../../imgs/posterPlaceholder.jpg';

const SearchedList = ({ movies }) => {
  const location = useLocation();
  const imgUrl = `https://image.tmdb.org/t/p/w400`;
  const imgPlaceholder = placeholder;

  return (
    <>
      {movies && (
        <div>
          <ul className={css.moviesList}>
            {movies.map(({ id, poster_path, title }) => (
              <li key={id}>
                <Link
                  className={css.movieItem}
                  to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  <img
                    src={
                      poster_path ? imgUrl.concat(poster_path) : imgPlaceholder
                    }
                    alt={title}
                    width="300"
                    height="450"
                  />
                  <h3>{title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchedList;
