import { NavLink } from 'react-router-dom';
import css from '../NavBar/NavBar.module.scss';
const NavBar = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
