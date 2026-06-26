import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">

      <div className="home-card">
        <h1>🩸 Blood Donor Finder</h1>

        <p>Find blood donors quickly and save lives.</p>

        <div className="home-buttons">
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>

      <div className="home-features">
        <h2>Why Choose Our Blood Donor Finder?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>🩸 Search Donors</h3>
            <p>
              Search blood donors instantly based on blood group and city.
            </p>
          </div>

          <div className="feature-card">
            <h3>➕ Add Donors</h3>
            <p>
              Register new blood donors quickly using a simple form.
            </p>
          </div>

          <div className="feature-card">
            <h3>❤️ Save Lives</h3>
            <p>
              Help patients during emergencies by connecting with donors.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure Access</h3>
            <p>
              User registration and login keep your data safe and organized.
            </p>
          </div>

        </div>
      </div>

      <footer className="footer">
        <p>© 2026 Blood Donor Finder | Made with ❤️</p>
      </footer>

    </div>
  );
}