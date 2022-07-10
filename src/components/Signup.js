import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const Signup = () => {
  const context = useContext(noteContext);
  const { showAlert } = context;
  const [credential, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
      }),
    });

    const json = await response.json();
    // console.log(json);
    if (json.success) {
      // Save auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      showAlert("Sign Up succesfull", "success");
    } else {
      showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="formDiv">
      <h1 className="formHeading">Create account to use Extrapoints</h1>
      <form onSubmit={handleSubmit} id="form">
        <div className="my-3 d-flex">
        <i class="fa-solid fa-pen"></i>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="name"
            placeholder="Enter your Name"
            value={credential.name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3 d-flex">
        <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            placeholder="Enter your Email"
            value={credential.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3 d-flex">
        <i class="fa-solid fa-key"></i>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            value={credential.password}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3 d-flex">
        <i class="fa-solid fa-key"></i>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Password"
            value={credential.cpassword}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <div className="btnlen">
          <button type="submit" className="btn btn-dark">
          Sign Up
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Signup;
