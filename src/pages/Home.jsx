import { useEffect, useState } from 'react';
import { getTrending } from 'service/fetchMovies';
import MoviesList from 'components/TrendingMovies/TrendingMovies';

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrending().then(data => {
      setTrends(data.results);
    });
  }, []);

  return <MoviesList movies={trends} />;
};

export default Home;
