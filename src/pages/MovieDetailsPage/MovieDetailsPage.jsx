import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import notFoundImg from "../../assets/image/notFoundImg.png";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const { current } = useRef(location.state ?? "/");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);

        const data = await getMovieDetails(movieId);

        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <Link to={current}>
        <GoBackBtn />
      </Link>

      {loader && <Loader />}
      {error && <ErrorMessage title="Something went wrong ..." bottom />}
      {movie && (
        <div className={css.movieDetailsWrap}>
          <div className={css.imgBox}>
            <img
              className={css.movieDetailsImg}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : notFoundImg
              }
              alt={movie.original_title}
              width="300"
              height="500"
            />
            <div>
              <h2 className={css.movieDetailsTitle}>{movie.original_title}</h2>

              <h3 className={css.movieDetailsSubTitle}>Overview</h3>
              <p className={css.movieDetailsText}>{movie.overview}</p>

              <h3 className={css.movieDetailsSubTitle}>Genres</h3>
              <p className={css.movieDetailsText}>
                {movie.genres.map((genre) => (
                  <span className={css.movieGenres} key={genre.id}>
                    {genre.name}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <h3 className={css.movieDetailsSubTitle}>Additional information</h3>
          <nav className={css.addInformBox}>
            <NavLink
              className={css.movieDetailsLink}
              to={"cast"}
              state={location.state}
            >
              Cast
            </NavLink>
            <NavLink
              className={css.movieDetailsLink}
              to={"reviews"}
              state={location.state}
            >
              Reviews
            </NavLink>
          </nav>

          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
