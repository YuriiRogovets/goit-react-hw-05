import { Field, Form, Formik } from "formik";

import css from "./SearchMovie.module.css";

const SearchMovie = ({ onSetSearchQuery }) => {
  return (
    <div>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, { resetForm }) => {
          if (values.query.trim() === "") {
            alert("Please enter any value >;0) ");
            return;
          }
          onSetSearchQuery(values.query);

          resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <Field type="text" name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchMovie;
