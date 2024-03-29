import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      try {
        setLoader(true);
        const { data } = await getMovieReviews(movieId);

        setMovieReviews(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <div className={css.reviewsWrap}>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {movieReviews.length === 0 ? (
        <p className={css.noResult}>
          We do not have any rewiews for this movies.
        </p>
      ) : (
        <ul>
          {movieReviews.map((item) => (
            <li key={item.id}>
              <h3 className={css.reviewsTitle}>Author: {item.author}</h3>
              <p className={css.reviewsText}>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
