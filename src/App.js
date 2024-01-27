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

          <button type="button" class="btn btn-primary">
            App Comp. btn1
          </button>
        </div>
        <br />
        <hr />
        <br />
      </div>
      <First one={first_prop} />
      <Second one={Second_prop} />
    </>
  );
}

export default App;
