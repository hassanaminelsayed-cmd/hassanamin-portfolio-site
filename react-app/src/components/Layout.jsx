import { NavLink, Outlet } from "react-router-dom";
import { Briefcase01, HomeLine, User01 } from "@untitledui/icons";

export function Layout() {
  return (
    <div className="site-shell">
      <header className="top-nav">
        <div className="container nav-content">
          <NavLink to="/" className="brand">
            Hassan Amin
          </NavLink>
          <nav className="nav-links">
            <NavLink to="/" className="nav-link">
              <HomeLine />
              Home
            </NavLink>
            <NavLink to="/work" className="nav-link">
              <Briefcase01 />
              Work
            </NavLink>
            <NavLink to="/about" className="nav-link">
              <User01 />
              About
            </NavLink>
          </nav>
          <a className="btn btn-primary" href="mailto:hassan.amin.elsayed@gmail.com">
            Book Intro
          </a>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-content">
          <span>All Rights Reserved hassanamin.net 2026</span>
          <a href="https://www.linkedin.com/in/hassan-mo-amin/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
