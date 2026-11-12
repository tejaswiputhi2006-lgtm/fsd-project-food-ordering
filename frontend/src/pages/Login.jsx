import React, { useState } from "react";
import { UtensilsCrossed, Mail, Lock, Eye, EyeOff } from "lucide-react";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (email === "admin@gmail.com" && password === "admin123") {
      setError("");
      onLogin();
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="brand">
          <UtensilsCrossed size={32} />
          <span>Food<span className="brand-highlight">Hub</span></span>
        </div>

        <div className="login-content">
          <span className="welcome-tag">WELCOME BACK!</span>
          <h1>Manage your food business with ease.</h1>
          <p>Manage menus, customers, orders and sales from one simple dashboard.</p>
          <div className="food-emoji">?? ?? ?? ?? ??</div>
        </div>

        <p className="login-footer">Â© 2026 FoodHub Management System</p>
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Admin Login</h2>
          <p className="form-subtitle">Sign in to access your dashboard</p>

          <label>Email Address</label>
          <div className="login-input">
            <Mail size={19} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password</label>
          <div className="login-input">
            <Lock size={19} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-button">Login to Dashboard ?</button>

          <div className="demo-details">
            <strong>Demo Login Details</strong>
            <p>Email: admin@gmail.com</p>
            <p>Password: admin123</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
