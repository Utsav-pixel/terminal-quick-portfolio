import React from "react"
import ReactDOM from "react-dom"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import Contact from "./Contact"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faPhone} from "@fortawesome/free-solid-svg-icons"

const checkScreenWidthMobile = () => {
  if (typeof window !== `undefined`) {
    return window.screen.width < 1024 ? true : false
  }
}

export const desktopButton = (fromCallText = true) => {
  return (
    <button
      className="popupWindowLinkButton"
      style={{ cursor: "pointer", background: "none", border: "none" }}
      onClick={() => {
        const win = new WinBox({
          title: "Contact me",
          width: "80%",
          height: "80%",
          x: "center",
          y: "center",
          onfocus: function () {
            this.removeClass("wb-no-focus")
            this.addClass("wb-focus")
          },
          onblur: function () {
            this.removeClass("wb-focus")
            this.addClass("wb-no-focus")
          },
        })

        ReactDOM.render(
          React.createElement(Contact, {
            close: () => win.close(),
          }),
          win.body
        )
      }}
    >
      {fromCallText ? "Contact" : <FontAwesomeIcon icon={faPhone} className="popupTerminalWindowLinkIcon" size="2x" />}
    </button>
  )
}

const Footer = () => {

  const onePageResumeLink = '/resume/Utsav_Python_EU.pdf';
  const projectInDepthLink = '/resume/Utsav_Resume_Full.pdf';

  const downloadFile = (fileUrl,FileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', FileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === 'onePageResume') {
      downloadFile(onePageResumeLink,"Utsav_Resume_OP");
    } else if (selectedValue === 'projectInDepth') {
      downloadFile(projectInDepthLink,"Utsav_Resume_InDept");
    }
  };



  return (
    <footer
      style={{ display: "flex", flexDirection: "column", margin: "auto" }}
    >
      <div style={{ margin: "auto" }}>
        <Link to="/">Home</Link> {" | "}
        {checkScreenWidthMobile() ? (
          <Link to="/contact">Contact</Link>
        ) : (
          desktopButton()
        )}
        {" | "}
        <a
          href="https://www.github.com/Utsav-pixel"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {" | "}
        <a
          href="https://www.linkedin.com/in/utsav-moradiya-445a371ab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {" | "}
<a
          href="https://www.linkedin.com/in/utsav-moradiya-445a371ab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume:
        </a>

     
         
      <select id="resumeSelect"        
        style={{
          backgroundColor: 'transparent',
          color: "#268bd2",
          border: "1px solid #268bd2",
        }}
        
        onChange={handleSelectChange}>
        <option value=""  style={{ backgroundColor: 'transparent' }} >Select an option</option>
        <option value="onePageResume">One-Page Resume</option>
        <option value="projectInDepth">Project In Depth</option>
      </select>

      </div>
      <span
        style={{
          margin: "auto",
          fontSize: "xx-small",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        © 2023-{new Date().getFullYear()} Utsav Moradiya {" | "} Source code
        distributed under MIT License
      </span>
    </footer>
  )
}

export default Footer
