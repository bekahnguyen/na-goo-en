import { Link, Outlet } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
