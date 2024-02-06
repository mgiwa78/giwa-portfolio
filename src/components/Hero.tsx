import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero">
          <div className="hero-left ">
            <div className="hero-body-title">
              Giwa Muhammad,
              <br /> Full Stack web Engineer
              <div className="hero-body-sub">Crafting Digital Experiencee</div>
            </div>
            <div className="hero-body-btn ">
              <Link href="#projects" className="hero-btn-left">
                My Projects
                <Image
                  width={13.5}
                  height={12.68}
                  alt="arrow"
                  src="/assets/arrow.svg"
                />
              </Link>
              <Link href="#experiences" className="hero-btn-right">
                Professional Experience
              </Link>
            </div>
          </div>
          <div className="hero-right">
            <img className="hero_img" src="/assets/hero/hero.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
