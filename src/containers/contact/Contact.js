import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, greeting} from "../../portfolio";
import {Fade} from "../../components/motion/Reveal";
import Button from "../../components/button/Button";

import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <a
                className="contact-detail-email"
                href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + contactInfo.email_address}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              
              <div className="contact-button-div">
                <Button text="Email Me" href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + contactInfo.email_address} newTab={true} />
                {greeting.resumeLink && (
                  <Button text="View Resume" href={greeting.resumeLink} newTab={true} secondary={true} />
                )}
              </div>
              
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
