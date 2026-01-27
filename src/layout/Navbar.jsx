import { Link, Outlet } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="particles" />
      <nav className="navbar">
        <div className="navbar-logo">Harsh</div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <div className="outlet-content">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;