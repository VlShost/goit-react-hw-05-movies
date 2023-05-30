import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const API_KEY = 'a9fe09abb8f595fb2934da0c1fe008dc';
const language = 'en-US';

const trendingUrl = '/trending/movie/day';
const searchUrl = '/search/movie';
// const detailsUrl = `/movie/${movieId}`;
// const creditsUrl = `/movie/${movieId}/credits`;
// const reviewsUrl = `/movie/${movieId}/reviews`;

const instance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
    language: language,
  },
});

export const getTrending = async () => {
  const { data } = await instance(trendingUrl);
  return data;
};

export const getMovieSearch = async query => {
  const { data } = await instance(searchUrl, {
    params: {
      query: query,
    },
  });
  return data;
};

export const getDetails = async movieId => {
  const detailsUrl = `/movie/${movieId}`;

  const { data } = await instance(detailsUrl);
  return data;
};

export const getCredits = async movieId => {
  const creditsUrl = `/movie/${movieId}/credits`;

  const { data } = await instance(creditsUrl);
  return data;
};

export const getReviews = async movieId => {
  const reviewsUrl = `/movie/${movieId}/reviews`;

  const { data } = await instance(reviewsUrl);
  return data;
};
