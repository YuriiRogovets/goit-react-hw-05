import css from "../ErrorMessage/ErrorMessage.module.css";
function ErrorMessage() {
  return <p className={css.errorText}> Something went wrong ... </p>;
}

export default ErrorMessage;
