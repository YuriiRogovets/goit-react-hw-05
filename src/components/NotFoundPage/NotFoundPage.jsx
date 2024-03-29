import { NavLink, useLocation } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <div className={css.notFoundWrap}>
      <h2 className={css.notFoundTitle}>Page not found</h2>

      <NavLink to={backLinkHref} className={css.notFoundLink}>
        Back to home page
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
