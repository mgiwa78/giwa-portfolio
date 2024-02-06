import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <section id="header" className="header-section">
      <div className="container">
        <div className="header ">
          <div className="logo">
            <Image
              width={330}
              height={34}
              alt="logo"
              src={"/assets/logo.png"}
            />
          </div>
          <ul className="menu">
            <li>
              <Link className="menu-btn" href={"#hero"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="menu-btn" href={"#about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="menu-btn" href={"#experiences"}>
                Experiences
              </Link>
            </li>
            <li>
              <Link className="menu-btn" href={"#projects"}>
                Projects
              </Link>
            </li>
            <li>
              <Link className="menu-btn" href={"#contact"}>
                Contact
              </Link>
            </li>{" "}
            <li>
              <Link className="menu-btn" href={"#resume"}>
                My Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
