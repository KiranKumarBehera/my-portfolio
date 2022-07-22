import React from "react";
import "./rain.css";

const Rain = (props) => {
  return (
    <>
      <div>{props.children}</div>
      <div className="raindrops" aria-hidden="true">
        <div className="raindrop">!</div>
        <div className="raindrop">*</div>
        <div className="raindrop">,</div>
        <div className="raindrop">.</div>
        <div className="raindrop">:</div>
        <div className="raindrop">;</div>
        <div className="raindrop">"</div>
        <div className="raindrop">.</div>
        <div className="raindrop">''</div>
        <div className="raindrop">.</div>
        <div className="raindrop">.</div>
        <div className="raindrop">:</div>
        <div className="raindrop">!</div>
        <div className="raindrop">.</div>
        <div className="raindrop">:</div>
        <div className="raindrop">i</div>
        <div className="raindrop">"</div>
        <div className="raindrop">.</div>
        <div className="raindrop">"</div>
        <div className="raindrop">''</div>
      </div>
    </>
  );
};

export default Rain;
