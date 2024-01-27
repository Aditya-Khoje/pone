import React from "react";
import "../Stylesheet/Second.css";

export default function Second(props) {
  return (
    <>
      <div className="main-container-second">
        <br />
        <hr />
        <br />
        <div>
          <h2>This is Second Component</h2>
          <h3>props are - </h3>
          <p>{props.one}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.SecondCompbtn1}
          >
            Second Comp. btn1
          </button>
        </div>
        <br />
        <hr />
        <br />
      </div>
    </>
  );
}
