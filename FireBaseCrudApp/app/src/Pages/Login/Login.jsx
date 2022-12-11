import React, { useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import {useNavigate} from "react-router-dom"
const Login = () => {
  const [error, seterror] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate= useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);

      })
      .catch((error) => {
       seterror(true)
        // ..
      });
  };
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder=" Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong Email and Password!</span>}
      </form>
    </div>
  );
};

export default Login;
