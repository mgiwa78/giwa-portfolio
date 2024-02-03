import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <h3 className="about-title">Meet Muhammad Giwa</h3>
          <h5 className="about-title-sub">
            A Passionate Full Stack Web Engineer
          </h5>
        </div>
        <div className="about-body">
          <div className="about-box">
            <Image
              src="/assets/about/image.png"
              width={81}
              height={78}
              alt="about-img-smile"
            />
            <div className="about-box-title">Personal</div>
            <div className="about-box-body">
              I{"'"}m Giwa Muhammad, a dedicated Full Stack Web Engineer, with
              years of hands-on experience, I specialize in creating digital
              solutions that seamlessly bridge design and functionality.
            </div>
          </div>
          <div className="about-box">
            <Image
              width={81}
              height={78}
              src="/assets/about/Feature.png"
              alt="about-img-location"
            />
            <div className="about-box-title">Where</div>
            <div className="about-box-body">
              Based in Abuja, Nigeria, I{"'"}m always connected to the digital
              world.
            </div>
          </div>
          <div className="about-box">
            <Image
              width={81}
              height={78}
              src="/assets/about/image2.png"
              alt="about-img-globe"
            />
            <div className="about-box-title">Profession</div>
            <div className="about-box-body">
              With expertise in both frontend and backend technologies, I craft
              web solutions that exceed expectations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
