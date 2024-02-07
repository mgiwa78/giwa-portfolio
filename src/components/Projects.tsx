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
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </h5>
        </div>
        <div className="projects-body">
          <div className="projects-item">
            <div
              className="project-image"
              style={{
                backgroundImage: "url(/assets/projects/supervised.png)",
                width: "330px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "163px"
              }}
            >
              {/* <Image
          
                src="/assets/projects/project-placeholder.svg"
                alt=""
              /> */}
            </div>
            <div className="projects-item-body">
              <div className="projects-item-title">SuperVised</div>
              <div className="projects-item-sub">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </div>
              <ul className="projects-item-links">
                <li>
                  <Link
                    className="inline-flex gap-2"
                    target="_blank"
                    href="https://github.com/mgiwa78/showroomApi"
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
            <div className="project-image">
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
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc.
              </div>
              <ul className="projects-item-links">
                <li>
                  <Link
                    className="inline-flex gap-2"
                    target="_blank"
                    href="https://github.com/mgiwa78/showroomApi"
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
                width: "330px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "163px"
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
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc
              </div>
              <ul className="projects-item-links">
                <li>
                  <Link
                    className="inline-flex gap-2"
                    target="_blank"
                    href="https://github.com/mgiwa78/showroomApi"
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
