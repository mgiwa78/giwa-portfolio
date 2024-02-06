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

const Experience = (props: Props) => {
  const [state, setState] = useState(false);
  const handleExpirienceToggle = () => {};
  return (
    <div className="experience-item">
      <div className="experience-item-header">
        <div className="title">
          Full Stack Web Engineer <span>| BarianSystems</span>
        </div>
        {state && <div className="sub">May 2023 – October 2023</div>}
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
        As a Full Stack Web Engineer at BarianSystems, I played a crucial role
        in a large-scale project that involved the development of an enterprise
        Human Resource Management system. My responsibilities included
        contributing to the front-end development using Vue.js and collaborating
        closely with cross-functional teams to ensure a seamless user
        experience. On the backend, I leveraged Laravel to create robust APIs
        and utilized MySQL for efficient data storage and management. I was
        actively involved in designing optimized database schemas and models. In
        addition, I implemented and maintained various UI components, not only
        for the HR system but also for other in-house and client-based projects.
        I used version control systems like Bitbucket and Git to manage code
        efficiently and collaborate effectively with the team. Regular code
        reviews and debugging sessions were part of our workflow to ensure
        high-quality code and optimal application performance. Furthermore, I
        translated Figma designs into HTML, Vue.js, and Laravel UI components to
        bring designs to life.
      </div>
    </div>
  );
};

export default Experience;
