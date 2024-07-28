import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/profile");
      } else {
        setError(data.message || "Login Failed");
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome back! 👋</h1>
        <h2>Sign in to your account</h2>
        <input
          type="text"
          placeholder="Your email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Continue</button>
        {error && <p className="error">{error}</p>}
        <a href="#" className="forgot-password">
          Forgot your password?
        </a>
        <p className="sign-up">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
