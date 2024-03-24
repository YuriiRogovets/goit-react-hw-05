import { Field, Form, Formik } from "formik";
import { getSearchMovies } from "../../services/api";
import css from "./SearchMovie.module.css";

const SearchMovie = () => {
  return (
    <div>
      <Formik
        initialValues={{
          query: "",
        }}
        onSubmit={(values, { resetForm }) => {
          if (values.query.trim() === "") {
            return;
          }

          getSearchMovies("car", 3);
          console.log(values.query);
          resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <Field
            // className={css.searchField}
            type="text"
            name="query"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchMovie;
