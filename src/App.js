import logo from "./logo.svg";
import "./App.css";
import First from "./Components/First.js";
import Second from "./Components/Second.js";
import Navbar from "./Components/Navbar.js";
import "./Stylesheet/First.css";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Login from "./Components/Login.js";

function App() {
  let first_prop = "Hii This is First Prop";
  let Second_prop = "Hii This is Second Prop";

  const [displayText, setDisplayText] = useState("Nothing to Display");

  let AppCompbtn1 = () => {
    console.log("App Component btn1 Clicked");
    setDisplayText("App Component btn1 Clicked");
  };

  let FirstCompbtn1 = () => {
    console.log("First Component btn1 Clicked");
    setDisplayText("First Component btn1 Clicked");
  };

  let SecondCompbtn1 = () => {
    console.log("Second Component btn1 Clicked");
    setDisplayText("Second Component btn1 Clicked");
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <h1>Hi This is H1 Heading</h1>
        <h2 className="display">
          Display Board
          <hr />
          <b>{displayText}</b>
        </h2>

        <div className="main-container-App">
          <br />
          <hr />
          <br />
          <div>
            <h2>This is App Component</h2>

            <button
              type="button"
              className="btn btn-primary"
              onClick={AppCompbtn1}
            >
              App Comp. btn1
            </button>
          </div>
          <br />
          <hr />
          <br />
        </div>
        <First one={first_prop} FirstCompbtn1={FirstCompbtn1} />
        <Second one={Second_prop} SecondCompbtn1={SecondCompbtn1} />
        <br />
        <br />
        <hr />
        <div className="break"></div>
        <hr />
        <hr />
        <div className="break"></div>
        <hr />
        <br />
        <br />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
