import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact">
          <div className="contact-left">
            <div className="contact-header">
              <h5 className="contact-sub">Contact me</h5>
              <h4 className="contact-title">Get in touch today</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                adipiscing tincidunt interdum tellus du.
              </p>
            </div>
            <ul>
              <li>
                <Link className="link" href={"/"}>
                  <Image
                    height={20}
                    width={20}
                    src="/assets/mail.svg"
                    alt="image"
                  />
                  mgiwa78@gmail.com
                </Link>
              </li>
              <li>
                <Link className="link" href={"/"}>
                  <Image
                    height={20}
                    width={20}
                    src="/assets/phone.svg"
                    alt="image"
                  />
                  +2349054551017
                </Link>
              </li>
              <li>
                <Link className="link" href={"/"}>
                  <Image
                    height={20}
                    width={25}
                    src="/assets/location.svg"
                    alt="image"
                  />
                  --------------------------------
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact-right">
            <div className="form-row ">
              <div className="form-col">
                <label htmlFor="name">Name</label>
                <input placeholder="Giwa Muhammad" type="text" name="name" />
              </div>
              <div className="form-col">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="mgiwa78@gmail.com"
                  type="email"
                  name="email"
                />
              </div>
            </div>
            <div className="form-row ">
              <div className="form-col">
                <label htmlFor="phone">Phone</label>
                <input placeholder="+2349054551017" type="text" name="phone" />
              </div>
              <div className="form-col">
                <label htmlFor="company">Company</label>
                <input placeholder="Facebook 😉" type="text" name="company" />
              </div>
            </div>
            <div className="form-row ">
              <div className="w-full">
                <label htmlFor="name">Message</label>
                <textarea
                  placeholder="Please type your message here..."
                  name="message"
                  id="message"
                  aria-expanded
                  rows={6}
                ></textarea>
              </div>
            </div>

            <div className="submit-btn">Send message</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
