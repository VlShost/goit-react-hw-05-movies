import SearchedList from '../components/SearchedMovieList/SearchedMovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'service/fetchMovies';
import SearchForm from '../components/SearchForm/SearchForm';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    const queryValue = searchForm.elements.query.value;

    if (!queryValue) {
      alert('Input your search query!');
      return;
    }

    if (queryValue === '') {
      setSearchParams({});
    }
    setSearchParams({ query: queryValue });

    searchForm.reset();
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    getMovieSearch(query).then(data => {
      if (!data.results.length) {
        return alert('No movies found');
      }
      setSearchResult(data.results);
    });
  }, [query]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {searchResult && <SearchedList movies={searchResult} />}
    </div>
  );
};

export default Movies;
