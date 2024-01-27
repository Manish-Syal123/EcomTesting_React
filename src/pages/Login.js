import React, { useState } from "react";
import "../style/loginstyle.css"; // Assuming your styles are in index.css
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                required
                //value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                required
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
                security="true"
              />
              <label>Password</label>
            </div>
            <div className="forget">
              <label>
                <input type="checkbox" />
                Remember Me <a href="#">Forget Password</a>
              </label>
            </div>
            <button type="submit">Log in</button>
            <div className="register">
              <p>
                Don't have an account <NavLink to="/signup">Register</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
