import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddDonor from "./pages/AddDonor";
import SearchDonor from "./pages/SearchDonor";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddDonor />} />
        <Route path="/search" element={<SearchDonor />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;