"use client";
import Image from "next/image";
import React, { useState } from "react";
import Experience from "./Experience";

type Props = {};

const Experiences = (props: Props) => {
  const experiences = [
    {
      position: "Full Stack Laravel Engineer",
      company: "Centre For Innovation and Entrepreneurship ",
      timeline: "November 2023 – Current",
      summary: `I have been actively involved in various projects in my current role. One significant project I undertook involved the transformation and integration of new functionalities into an existing Laravel framework. Working independently, I navigated through the complexities of the freelancing system, modifying code bases, and adapting database schemas and migrations to accommodate the new features seamlessly. Additionally, I spearheaded the translation of intricate Figma designs into functional HTML layouts using Bootstrap 5, contributing to at least five successful implementations.

Furthermore, I played a pivotal role in a project centered around a learning management system for a government organization. Tasked with adapting the existing Laravel project to align with the organization's evolving needs, I addressed intricate requirements such as managing multiple centers, instructors, students, and roles. Throughout these endeavors, I actively participated in collaborative meetings, offering insights, and contributing to code iterations and bulk fixes to ensure the successful completion of each project.
`
    },
    {
      position: "Full Stack Web Engineer",
      company: "BarianSystems",
      timeline: "May 2023 – October 2023",
      summary: `As a Full Stack Web Engineer at BarianSystems, I played a crucial
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
              Laravel UI components to bring designs to life.`
    },
    {
      position: "Full Stack Web Engineer",
      company: "IGS Innovative Global solutions ",
      timeline: "August 2022 – June 2023",
      summary: `Participated in development of comprehensive clinic management system using Bootstrap 5 and PHP
•   Designed and implemented MySQL database schemas for efficient data management,
•   Collaborated with cross-functional team to ensure project milestones were met,
•   Conducted code reviews and provided technical guidance to enhance team performance,
•   Delivered functional system that improved clinic operations and patient management.`
    }
  ];
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
          {experiences.map((experience, i) => (
            <Experience key={i} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
