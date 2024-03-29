import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      setTrendingMovies([]);

      try {
        setLoader(true);
        const data = await getTrendingMovies();

        setTrendingMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMessage title="Something went wrong ..." bottom />}
      {trendingMovies.length > 0 && (
        <MovieList trendingMovies={trendingMovies} state={location} />
      )}
    </div>
  );
};

export default HomePage;
