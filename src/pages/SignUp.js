import React, { useState } from "react";
import "../style/loginstyle.css";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};
  // console.log(username);
  // console.log(email);
  // console.log(password);
  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="" onSubmit={handleSubmit}>
              <h2>Register</h2>
              <div className="inputbox">
                <ion-icon name="user-inline"></ion-icon>
                <input
                  type="username"
                  required
                  // value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>Username</label>
              </div>
              <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="email"
                  required
                  // value={email}
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
                />
                <label>Password</label>
              </div>
              <div className="forget">
                <label>
                  <input type="checkbox" />
                  Remember Me <a href="#">Forget Password</a>
                </label>
              </div>
              <button type="submit">Register</button>
              <div className="register">
                <p>
                  Already have an account <NavLink to="/login">Login</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
