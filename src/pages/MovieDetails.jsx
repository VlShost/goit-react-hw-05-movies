import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from 'service/fetchMovies';

const { default: MovieInfo } = require('components/MovieInfo/MovieInfo');

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getDetails(movieId)
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <>
      <MovieInfo movie={movie} />
    </>
  );
};

export default MovieDetails;
