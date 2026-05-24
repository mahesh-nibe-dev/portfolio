import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, secondary}) {
  return (
    <div className={className}>
      <a className={secondary ? "secondary-button" : "main-button"} href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
