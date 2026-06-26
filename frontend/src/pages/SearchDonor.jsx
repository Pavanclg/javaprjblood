import { useState } from "react";
import axios from "axios";

export default function SearchDonor() {

  const [bloodGroup, setBloodGroup] = useState("");
  const [donors, setDonors] = useState([]);

  const searchDonors = async () => {
  if (bloodGroup.trim() === "") {
    alert("Please enter a Blood Group.");
    return;
  }

  try {
    const res = await axios.get(
      `http://localhost:8081/api/donors/bloodGroup/${bloodGroup}`
    );

    if (res.data.length === 0) {
      alert("No donors found.");
      setDonors([]);
      return;
    }

    setDonors(res.data);

  } catch (err) {
    setDonors([]);
    alert("No donors found.");
  }
};

  return (
    <div className="search-page">
      <h2>Search Donor</h2>

      <input
        placeholder="Enter Blood Group"
        value={bloodGroup}
        onChange={(e) => setBloodGroup(e.target.value)}
      />

      <br /><br />

      <button onClick={searchDonors}>
        Search
      </button>

      <br /><br />

     <table className="donor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {donors.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.age}</td>
              <td>{d.bloodGroup}</td>
              <td>{d.gender}</td>
              <td>{d.phone}</td>
              <td>{d.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}