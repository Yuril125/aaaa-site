import React, { useState } from "react";
import { formatTitleToID } from "../utils/format";
import { navIconWrapper, navButtonWrapper, navbarWrapper } from "../styles/styles";

export const Navbar = (props) => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (id) => {
      setActiveButton(id);
      const targetElement = document.getElementById(id);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    };
    console.log("HERE")

    return (
      <nav className="sticky-navbar" style={navbarWrapper}>
        <div>
          {props.jumpButtons.map((jumpButton) => {
            console.log(jumpButton.sectionName);
            return (<div style={{
              ...navButtonWrapper,
              float: "left",
            }}>
              <div onMouseDown={() => {
                handleButtonClick(formatTitleToID(jumpButton.sectionName ?? ""));
              }}>
                {jumpButton.displayName}
              </div>
            </div>);
          })}
        </div>
        <div>
          {props.jumpButtons.map((linkIcon) => {
            return (<div style={{
              ...navIconWrapper,
              float: "right",
            }}>
              <a href={linkIcon.link}>
                <img src={linkIcon.icon} height="80px" width="80px"/>
              </a>
            </div>);
          })}
        </div>
      </nav>
    );
}
