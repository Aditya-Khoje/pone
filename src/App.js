import logo from "./logo.svg";
import "./App.css";
import First from "./Components/First.js";
import Second from "./Components/Second.js";
import "./Stylesheet/First.css";
import { useState } from "react";

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
    </>
  );
}

export default App;
