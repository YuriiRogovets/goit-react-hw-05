import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ trendingMovies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.moviesList}>
        {trendingMovies.map((item) => {
          return (
            <li className={css.moviesListItem} key={item.id}>
              <NavLink
                className={css.moviesListLink}
                to={`/movies/${item.id}`}
                state={location}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
