import "./App.css";
import Home from "./Pages/Home/";
import Login from "./Pages/Login/";
import Register from "./Pages/Register/";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/dashboard";
import ProtectedRoute from "./HOC/ProtectedRoute";
import { useEffect, useState } from "react";
import Detail from "./Pages/Detail/";

function App() {
  const [isLogin, setIsLogin] = useState(null);
  const checkIfLogin = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    checkIfLogin();
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isLogin={isLogin}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
