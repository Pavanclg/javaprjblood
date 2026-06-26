import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = async () => {
    // Validation
    if (!user.name || !user.email || !user.password) {
      alert("Please fill all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user.email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (user.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    try {
      const response = await API.post("/auth/register", user);

      console.log(response.data);

      alert("Registration Successful!");

      setUser({
        name: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } catch (err) {
      console.error("Registration Error:", err);

      if (err.response) {
        if (err.response.status === 409) {
          alert("Email already exists.");
        } else {
          alert("Registration Failed.");
        }
      } else {
        alert("Server is not responding.");
      }
    }
  };

  return (
    <div className="auth-page">
    <div className="container">
      <h2>Register</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />

      <button onClick={register}>
        Register
      </button>
    </div>
    </div>
  );
}