import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>🩸 Blood Donor Finder</h1>

        <h2>Welcome!</h2>

        <p>Manage blood donors quickly and easily.</p>

        <div className="features">
          <div className="card">
            <h3>➕ Add Donor</h3>
            <p>Register new blood donors.</p>
          </div>

          <div className="card">
            <h3>🔍 Search Donor</h3>
            <p>Find donors by blood group.</p>
          </div>

          <div className="card">
            <h3>❤️ Save Lives</h3>
            <p>Help people find blood faster.</p>
          </div>
        </div>
      </div>
    </>
  );
}