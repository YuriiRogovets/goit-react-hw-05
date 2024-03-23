import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClassNames = ({ isActive }) => {
  return clsx(css.headerLink, {
    [css.active]: isActive,
  });
};

const Navigation = () => {
  return (
    <div>
      <header className={css.header}>
        <NavLink className={getNavLinkClassNames} to="/">
          Home
        </NavLink>
        <NavLink className={getNavLinkClassNames} to="/movies">
          Movies
        </NavLink>
      </header>
    </div>
  );
};

export default Navigation;
