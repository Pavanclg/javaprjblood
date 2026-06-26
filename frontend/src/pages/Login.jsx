import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    // Validation
    if (!user.email || !user.password) {
      alert("Please enter Email and Password.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user.email)) {
      alert("Please enter a valid Email.");
      return;
    }

    try {
      const res = await API.post("/auth/login", user);

      if (res.data === "Login Successful") {
        alert("Login Successful");

        localStorage.setItem("loggedIn", "true");

        navigate("/dashboard");
      } else {
        alert("Invalid Email or Password.");
      }
    } catch (err) {
      console.error(err);

      if (err.response) {
        alert("Invalid Email or Password.");
      } else {
        alert("Server is not responding.");
      }
    }
  };

  return (
    <div className="auth-page">
    <div className="container">
      <h2>Login</h2>

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

      <button onClick={login}>
        Login
      </button>
    </div>
    </div>
  );
}