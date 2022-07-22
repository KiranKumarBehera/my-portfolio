import React from "react";
import "./stars.css";

const Stars = (props) => {
  return (
    <>
      <div>{props.children}</div>
      <div className="stars" aria-hidden="true">
        <div className="star">!</div>
        <div className="star">*</div>
        <div className="star">,</div>
        <div className="star">.</div>
        <div className="star">:</div>
        <div className="star">;</div>
        <div className="star">"</div>
        <div className="star">.</div>
        <div className="star">''</div>
        <div className="star">.</div>
        <div className="star">!</div>
        <div className="star">*</div>
        <div className="star">,</div>
        <div className="star">.</div>
        <div className="star">:</div>
        <div className="star">;</div>
        <div className="star">"</div>
        <div className="star">.</div>
        <div className="star">''</div>
        <div className="star">.</div>
      </div>
    </>
  );
};

export default Stars;
