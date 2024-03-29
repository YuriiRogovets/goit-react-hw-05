import { useSearchParams } from "react-router-dom";
import SearchMovie from "../../components/SearchMovie/SearchMovie";
import { useEffect, useState } from "react";
import { getSearchMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const searchQuery = searchParams.get("query");

  useEffect(() => {
    if (!searchQuery) return;

    setSearchMovies([]);

    const fetchData = async (searchQuery, page) => {
      try {
        setLoader(true);

        const data = await getSearchMovies(searchQuery, page);
        setSearchMovies(data.results); //пока ок

        if (!data.total_results) {
          alert(
            "Sorry, we have not found the films for your request. Try to write it differently."
          );
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };

    if (searchQuery) {
      fetchData(searchQuery);
    }
  }, [searchQuery]);

  const onSetSearchQuery = (query) => {
    setSearchParams({ query });
  };

  return (
    <div>
      <SearchMovie onSetSearchQuery={onSetSearchQuery} />

      {loader && <Loader />}
      {error && <ErrorMessage title="Something went wrong ..." bottom />}
      {searchMovies.length > 0 && <MovieList trendingMovies={searchMovies} />}
    </div>
  );
};

export default MoviesPage;
