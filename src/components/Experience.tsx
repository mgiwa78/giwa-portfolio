"use client";
import React, { useState } from "react";

type Props = {
  experience: {
    position: string;
    timeline: string;
    summary: string;
    company: string;
  };
};

const Experience = ({ experience }: Props) => {
  const [state, setState] = useState(false);
  const handleExpirienceToggle = () => {};
  return (
    <div className="experience-item">
      <div className="experience-item-header">
        <div className="title">
          {experience.position} <span>| {experience.company}</span>
        </div>
        {state && <div className="sub">{experience.timeline}</div>}
        {!state && (
          <div
            onClick={() => setState(!state)}
            style={{
              backgroundColor: "#000",
              height: 3,
              width: 20,
              cursor: "pointer"
            }}
          ></div>
        )}
      </div>
      <div
        style={{ height: state ? "250px" : 0, overflow: "hidden" }}
        className="experience-item-body"
      >
        {experience.summary}
      </div>
    </div>
  );
};

export default Experience;
