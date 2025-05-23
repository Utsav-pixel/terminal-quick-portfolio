import React from "react"
import Typewriter from "typewriter-effect"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faHackerrank, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faLaptopCode, faLink, faPhone ,faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { desktopButton } from '../components/Footer'
const checkScreenWidthMobile = () => {
  if (typeof window !== `undefined`) {
    return window.screen.width < 1024 ? true : false
  }
}



export default function PopupTerminalWindow({
  title,
  popupImageAlt,
  popupText,
  video,
  popupImageSrc,
  popupGithubLink,
  popupHRLink,
  popupLILink,
  popupLCLink,
  popupLiveLink,
  techIcons,
  Cloud,
  html,
}) {
  let link = ""
  techIcons = techIcons?.map(icon => (
    <li className="techItem tooltip" key={icon}>
      <span className="tooltiptext">{`${
        icon.charAt(0).toUpperCase() + icon.slice(1)
      }`}</span>
      <img
        className="svgIcon"
        src={`https://cdn.jsdelivr.net/npm/simple-icons@10.3.0/icons/${icon}.svg`}
        alt="Tech icon"
      />
    </li>
  ))
  Cloud = Cloud?.map(icon => (
    <li className="techItem tooltip" key={icon}>
      <span className="tooltiptext">{`${
        icon.charAt(0).toUpperCase() + icon.slice(1)
      }`}</span>
      <img
        className="svgIcon"
        src={`https://cdn.jsdelivr.net/npm/simple-icons@10.3.0/icons/${icon}.svg`}
        alt="Tech icon"
      />
    </li>
  ))
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
      // Add more breakpoints as needed
    ],
  };

  return (
    <>
      <div
        className="popupTerminaWindowContainer"
        style={{ backgroundImage: popupImageSrc?.length>0? `url(${popupImageSrc[0]})`:'' }}
      >
        <h1 className="popupTerminaWindowHeader">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString(`${title}`)
                .start()
                .callFunction(function (state) {
                  state.elements.cursor.style.display = "none"
                })
            }}
          />
        </h1>
        {/* {video === "false" && popupImageSrc!=null?(
          <div className="popupTerminalWindowImageContainer">
            {(link = popupLiveLink || popupGithubLink) ? ( // eslint-disable-line no-cond-assign
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={`${
                    /^https/.test(popupImageSrc)
                      ? popupImageSrc
                      : "/" + popupImageSrc
                  }`}
                  className="popupTerminaWindowImage"
                  alt={popupImageAlt}
                ></img>
              </a>
            ) : (
              <img
                src={`${
                  /^https/.test(popupImageSrc)
                    ? popupImageSrc
                    : "/" + popupImageSrc
                }`}
                className="popupTerminaWindowImage"
                alt={popupImageAlt}
              ></img>
            )}
          </div>
        ) : popupImageSrc!=null?(
          <div className="popupTerminalWindowImageContainer">
            <video
              height="100%"
              width="100%"
              controls
              autoplay
              muted
              loop
              playsinline
              className="popupTerminaWindowImage"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ):null} */}
      {video === "false" && popupImageSrc?.length > 0 ? (
        <Slider {...settings}>
          {popupImageSrc.map((image, index) =>{console.log(image)
          return(
            
            <div key={index} className="popupTerminalWindowImageContainer">
              {(link = popupLiveLink || popupGithubLink) ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`${
                      /^https/.test(image)
                        ? image
                        : '/' + image
                    }`}
                    className="popupTerminaWindowImage"
                    alt={popupImageAlt}
                  ></img>
                </a>
              ) : (
                <img
                  src={`${
                    /^https/.test(image)
                      ? image
                      : '/' + image
                  }`}
                  className="popupTerminaWindowImage"
                  alt={popupImageAlt}
                ></img>
              )}
            </div>
          )})}
        </Slider>
      ) : video != null  && video!=="false"? (
        <div className="popupTerminalWindowImageContainer">
          <video
            height="100%"
            width="100%"
            controls
            autoPlay
            muted
            loop
            playsInline
            className="popupTerminaWindowImage"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
        {popupGithubLink || popupLiveLink || popupHRLink ? (
          <div className="popupTerminalWindowLinkIcons">
            {popupLiveLink ? (
              <a href={popupLiveLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faLink}
                  className="popupTerminalWindowLinkIcon"
                  size="2x"
                />
              </a>
            ) : (
              ""
            )}
            {popupGithubLink ? (
              <a
                href={popupGithubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="popupTerminalWindowLinkIcon"
                  size="2x"
                />

              </a>
            ) : (
              ""
            )}

{popupHRLink ? (
              <a
                href={popupHRLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faHackerrank}
                  className="popupTerminalWindowLinkIcon"
                  size="2x"
                />
              </a>
            ) : (
              ""
            )}

{popupLCLink ? (
              <a
                href={popupLCLink}
                target="_blank"
                rel="noopener noreferrer"
              >
      
                <FontAwesomeIcon icon={faLaptopCode} className="popupTerminalWindowLinkIcon"
                  size="2x" />
                  {/* <FontAwesomeIcon icon="fa-solid fa-c" className="popupTerminalWindowLinkIcon"
                    size="2x" /> */}
              </a>
            ) : (
              ""
            )}

            

{popupLILink ? (
              <a
                href={popupLILink}
                target="_blank"
                rel="noopener noreferrer"
              >
      
                <FontAwesomeIcon icon={faLinkedin} className="popupTerminalWindowLinkIcon"
                  size="2x" />
                  {/* <FontAwesomeIcon icon="fa-solid fa-c" className="popupTerminalWindowLinkIcon"
                    size="2x" /> */}
              </a>
            ) : (
              ""
            )}

{popupLCLink ? (
    <a
    href="mailto:utsav.moradiya3@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faEnvelope} className="popupTerminalWindowLinkIcon" size="2x" />
  </a>
            ) : (
              ""
            )}
            
            {popupLCLink ? 
              checkScreenWidthMobile() ? (
                <Link to="/contact">   <FontAwesomeIcon icon={faPhone} className="popupTerminalWindowLinkIcon" size="2x" /></Link>
              ) : (
                desktopButton(false)
              )
            : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        <div className="popupTerminaWindowTextContainer">
          <div
            className="popupTerminaWindowText"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
          <p className="popupTerminaWindowText">{popupText}</p>
          {techIcons ? (
            <>
              <div className="break"></div>
              <div className="popupTerminalWindowFooter">
                <h4>Tech used:</h4>
                <ul className="techItemsList">{techIcons}</ul>
              </div>
            </>
          ) : (
            ""
          )}

{Cloud ? (
            <>
              <div className="break"></div>
              <div className="popupTerminalWindowFooter">
                <h4>Cloud-Services used:</h4>
                <ul className="techItemsList">{Cloud}</ul>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}

