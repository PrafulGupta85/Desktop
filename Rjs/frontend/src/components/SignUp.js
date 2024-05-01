import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:3010/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      navigate("/");
    }
    // this stores the data in localstorage in chrome to save data for sometime even after closing tab
    localStorage.setItem("user", JSON.stringify(result));
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <input
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />
      <input
        className="inputBox"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter Email"
      />
      <input
        className="inputBox"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter Password"
      />
      <button className="signUpButton" onClick={collectData} type="button">
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
