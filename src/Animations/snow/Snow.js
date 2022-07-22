import React from "react";
import "./snow.css";

const Snow = (props) => {
  return (
    <>
      <div>{props.children}</div>
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">.</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">.</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">.</div>
      </div>
    </>
  );
};

export default Snow;
