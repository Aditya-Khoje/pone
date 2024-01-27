import React from "react";

function First(props) {
  return (
    <>
      <div className="main-container-first">
        <br />
        <hr />
        <br />
        <div>
          <h2>This is First Component</h2>
          <h3>props are - </h3>
          <p>{props.one}</p>
          <button type="button" className="btn btn-primary">
            First Comp. btn1
          </button>
        </div>
        <br />
        <hr />
        <br />
      </div>
    </>
  );
}

export default First;
