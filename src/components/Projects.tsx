import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h3 className="projects-title">Projects</h3>
          <h5 className="projects-sub">
            Here are some of the projects I&apos;ve worked on recently to
            showcase my skills and experience.
          </h5>
        </div>
        <div className="projects-body">
          <div className="projects-item">
            <div
              className="project-image"
              style={{
                backgroundImage: "url(/assets/projects/supervised.png)",
              }}
            ></div>
            <div className="projects-item-body">
              <div className="projects-item-title">SuperVised</div>
              <div className="projects-item-sub">
                SuperVised™ is an innovative digital platform revolutionizing
                academic research supervision. With seamless online
                collaboration between students and supervisors, it streamlines
                communication, document management, and project tracking.
                SuperVised™ ensures academic integrity and timely completion of
                research projects, enhancing the overall research experience.
              </div>
              <ul className="projects-item-links">
                <li>
                  <Link
                    className="inline-flex gap-2"
                    target="_blank"
                    href="https://skorler.com/"
                  >
                    <Image
                      height={22}
                      width={22}
                      src="/assets/git.svg"
                      alt="git-image"
                    />
                    Visit Repository
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="projects-item">
            <div
              className="project-image"
              style={{
                backgroundImage: "url(/assets/projects/lms.png)",
              }}
            >
              <Image
                width={330}
                height={163}
                style={{ height: "163px", width: "330px" }}
                src="/assets/projects/project-placeholder.svg"
                alt=""
              />
            </div>
            <div className="projects-item-body">
              <div className="projects-item-title">
                Logistics Management System
              </div>
              <div className="projects-item-sub">
                A comprehensive solution facilitating seamless customer ordering
                and delivery processes. With features tailored for parcel
                logistics, vendor and customer management, and online payments,
                it streamlines activities within the system. Utilizing Vue.js
                for the frontend and Laravel for the backend, it ensures
                comprehensive control and oversight, enhancing overall
                logistical efficiency.
              </div>
              <ul className="projects-item-links">
                <li>
                  <Link
                    className="inline-flex gap-2"
                    target="_blank"
                    href="https://portal.druppa.com/"
                  >
                    <Image
                      height={22}
                      width={22}
                      src="/assets/git.svg"
                      alt="git-image"
                    />
                    Visit Repository
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="projects-item">
            <div
              className="project-image"
              style={{
                backgroundImage: "url(/assets/projects/rms.png)",
              }}
            >
              {/* <Image
                width={330}
                height={163}
                src="/assets/projects/project-placeholder.svg"
                alt=""
              /> */}
            </div>
            <div className="projects-item-body">
              <div className="projects-item-title">
                Real Estate Management System
              </div>
              <div className="projects-item-sub">
                A custom application designed to simplify property and payment
                management processes. Leveraging technologies such as
                JavaScript, HTML, CSS, PHP, SQL, and Bootstrap 5, it offers
                user-friendly solutions for real estate firms. By centralizing
                property and payment management, it enhances efficiency and
                improves employee task management, ultimately optimizing overall
                operations.
              </div>
              <ul className="projects-item-links">
                <li>
                  <Link
                    className="inline-flex gap-2"
                    target="_blank"
                    href="https://github.com/mgiwa78/amron-admin"
                  >
                    <Image
                      height={22}
                      width={22}
                      src="/assets/git.svg"
                      alt="git-image"
                    />
                    Visit Repository
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
