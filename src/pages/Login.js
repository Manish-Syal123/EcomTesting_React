import React, { useState } from "react";
import "../style/loginstyle.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3004/Login", user)
      .then((response) => {
        console.log(response);

        const token = response.data.token;
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage("Please fill out all the details correctly");
        console.log("Failed Login : ", err);
      });
  };

  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="" onSubmit={handleLogin}>
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
            {errMessage && (
              <div style={{ padding: "5px", marginTop: "10px", color: "red" }}>
                {errMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
