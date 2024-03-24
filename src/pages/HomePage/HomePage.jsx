import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);

      try {
        const data = await getTrendingMovies();

        if (data) {
          // Перевіримо, чи є дані
          setTrendingMovies(data);
        }
        console.log(data);
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
        <MovieList trendingMovies={trendingMovies} />
      )}
    </div>
  );
};

export default HomePage;
