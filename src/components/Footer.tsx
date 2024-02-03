import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section id="footer" className="footer-section">
      <div className="container">
        <div className="footer">
          <ul className="footer-menu-left">
            <li>
              <Link href="#giwa">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
          </ul>
          <div>
            <Image
              width={330.03}
              height={34}
              alt="logo"
              src="/assets/logo.png"
            ></Image>
          </div>
          <ul className="footer-menu-right">
            <li>
              <Link href="#expirience">Expirience</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
