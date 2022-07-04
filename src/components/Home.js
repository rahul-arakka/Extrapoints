import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";

const Home = () => {

  return (
    <div className="container">
    
    <form className="container">
      <h2 className="my-3">Add a Note</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Description
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
     
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>

    <Notes/>
    </div>

  );
};
export default Home;
