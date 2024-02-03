import Image from "next/image";
import React from "react";

type Props = {};

const Experiences = (props: Props) => {
  return (
    <section id="experiences" className="experiences-section">
      <div className="container">
        <div className="experience-header">
          <h3 className="experience-title">Professional Experience</h3>
          <h5 className="experience-sub">
            Bringing Ideas to Life Through Code
          </h5>
        </div>
        <div className="experience-body">
          <div className="experience-item">
            <div className="experience-item-header">
              <div className="title">
                Full Stack Web Engineer <span>| BarianSystems</span>
              </div>
              <div className="sub">May 2023 – October 2023</div>
            </div>
            <div className="experience-item-body">
              As a Full Stack Web Engineer at BarianSystems, I played a crucial
              role in a large-scale project that involved the development of an
              enterprise Human Resource Management system. My responsibilities
              included contributing to the front-end development using Vue.js
              and collaborating closely with cross-functional teams to ensure a
              seamless user experience. On the backend, I leveraged Laravel to
              create robust APIs and utilized MySQL for efficient data storage
              and management. I was actively involved in designing optimized
              database schemas and models. In addition, I implemented and
              maintained various UI components, not only for the HR system but
              also for other in-house and client-based projects. I used version
              control systems like Bitbucket and Git to manage code efficiently
              and collaborate effectively with the team. Regular code reviews
              and debugging sessions were part of our workflow to ensure
              high-quality code and optimal application performance.
              Furthermore, I translated Figma designs into HTML, Vue.js, and
              Laravel UI components to bring designs to life.
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-item-header">
              <div className="title">
                Lead Full Stack Developer
                <span> | IGS Innovative Global Services</span>
              </div>
              <Image height={50} width={10} src="/assets/Les.png" alt="" />
            </div>
            <div className="experience-item-body"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
