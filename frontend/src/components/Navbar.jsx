import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🩸 Blood Donor Finder</h2>

      <div className="nav-links">
        <Link to="/dashboard">Home</Link>
        <Link to="/add">Add Donor</Link>
        <Link to="/search">Search</Link>
        <Link to="/">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;