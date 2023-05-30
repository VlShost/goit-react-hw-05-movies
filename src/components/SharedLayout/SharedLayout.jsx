import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLyout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <ul className={css.headerNav}>
          <li>
            <NavLink className={css.pageLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.pageLink} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
