import { useState } from "react";
import API from "../services/api";

function AddDonor() {
  const [donor, setDonor] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setDonor({
      ...donor,
      [e.target.name]: e.target.value,
    });
  };

  const saveDonor = async () => {
    // Validation
    if (
      !donor.name ||
      !donor.age ||
      !donor.gender ||
      !donor.bloodGroup ||
      !donor.phone ||
      !donor.city
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (donor.age < 18 || donor.age > 65) {
      alert("Age must be between 18 and 65.");
      return;
    }

    if (!/^\d+$/.test(donor.phone)) {
      alert("Phone number should contain only digits.");
      return;
    }

    if (donor.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    try {
      await API.post("/donors", donor);

      alert("Donor Added Successfully!");

      setDonor({
        name: "",
        age: "",
        gender: "",
        bloodGroup: "",
        phone: "",
        city: "",
      });

    } catch (err) {
      console.error(err);
      alert("Failed to add donor.");
    }
  };

  return (
    <div className="container">
      <h2>Add Donor</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={donor.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={donor.age}
        onChange={handleChange}
      />

      <select
        name="gender"
        value={donor.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <select
        name="bloodGroup"
        value={donor.bloodGroup}
        onChange={handleChange}
      >
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={donor.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={donor.city}
        onChange={handleChange}
      />

      <button onClick={saveDonor}>
        Save Donor
      </button>
    </div>
  );
}

export default AddDonor;