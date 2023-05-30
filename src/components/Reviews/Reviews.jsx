import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'service/fetchMovies';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(data => setReviews(data.results))
      .catch(error => console.error(error));
  }, [movieId]);

  if (reviews.length === 0) {
    return (
      <>
        <h1>We don`t have any reviews for this movie</h1>
      </>
    );
  }

  return (
    <>
      <ul className={css.reviewsList}>
        {reviews.map(({ author, content, id }) => (
          <li key={id} className={css.reviewsItem}>
            <h3 className={css.reviewAuthor}>Author: "{author}"</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
