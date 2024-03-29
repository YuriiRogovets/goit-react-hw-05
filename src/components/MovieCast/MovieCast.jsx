import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      try {
        setLoader(true);

        const { data } = await getMovieCredits(movieId);

        setMovieCast(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <div className={css.castWrap}>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {movieCast && (
        <ul className={css.castList}>
          {movieCast.map((item) => (
            <li key={item.id} className={css.castListItem}>
              <img
                className={css.castImg}
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                    : "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"
                }
                alt={"poster"}
                width="250"
              />
              <div>
                <h3 className={css.castTitle}>{item.name}</h3>
                <p>Character:{item.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
