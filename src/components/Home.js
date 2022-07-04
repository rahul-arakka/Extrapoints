import React from "react";
import Notes from "./Notes";
import Alert from "./Alert";

const Home = () => {

  return (
    <>
    <Alert message="Alert Added after font Awesome"/>
    <div className="container my-3">
    <Notes/>
    </div>

    </>

  );
};
export default Home;
