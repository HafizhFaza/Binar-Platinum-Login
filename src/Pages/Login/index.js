import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState();
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setIsLogin(true);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ with: "100%" }}>
      <div style={{ width: "400px", margin: "0 auto" }}>
        <h1> Login Page</h1>
        <a style={{ display: "flex", flexDirection: "column" }}>
          <label>Email</label>
          <input onChange={(e) => handleEmail(e)} type="text" />
        </a>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Password</label>
          <input onChange={(e) => handlePassword(e)} type="text" />
        </div>
        <button
          onClick={handleLogin}
          style={{ width: "100%", marginTop: "12px" }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
