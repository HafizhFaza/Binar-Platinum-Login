import "./App.css";
import Home from "./Pages/Home/";
import Login from "./Pages/Login/";
import Register from "./Pages/Register/";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/dashboard";
import ProtectDashBoard from "./Pages/Dashboard/ProtectDashBoard";
import ProtectedRoute from "./HOC/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute user={}>
            //children
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
