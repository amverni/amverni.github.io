import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import higgins from "assets/img/higgins.jpg"
import { scroll_header, getOpacity, getPadding  } from 'assets/js/main';

export default function Header(): JSX.Element {
  let location = useLocation().pathname;
  // console.log(getOpacity());
  // const [opacity, setOpacity] = useState(getOpacity());
  // useEffect(() => {
  //   const onScroll = () => {
  //     scroll_header(higgins)
  //   }
  //   // clean up code
  //   window.removeEventListener('scroll', onScroll);
  //   window.addEventListener('scroll', onScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return (
    <>
      {/* Header */}
      <div id="header" style={{
        background: `linear-gradient(to right, rgba(107, 77, 168, 0.7), rgba(17, 138, 188, 0.7)), url(${higgins}) no-repeat center bottom`,
        // filter: `blur(${getOpacity()}%)`,
        // backgroundSize: '100%'
        // paddingBottom: `${getPadding()}px`
      }}>
        <div className="container">
          <div className="row">
            <div className="col fade-in fade-in-2">
              <h1>Andrew M. Vernier</h1>
              <p id="current-role">Software Engineer @ Microsoft</p>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <nav className="navbar navbar-expand-md navbar-custom navbar-dark sticky-top">
        <div className="container-fluid">
          <div className="navbar-header" id="header-logo">
            <Link className="navbar-brand scroll" to="/">AMV</Link>
          </div>

          <div className="navbar-header" id="header-button">
            <button type="button" id="navbar-btn" className="navbar-toggler" data-toggle="collapse" data-target="#collapsible-navbar">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="collapsible-navbar">
            <div className="navbar-nav text-uppercase">
              <div className="nav-item dropdown">
                <Link className={"nav-link scroll " + (location==="/" ? "active" : "")} to="/">Home</Link>
                <div className="dropdown-content">
                  <Link className="nav-link scroll" to="/#about">About</Link>
                  <Link className="nav-link scroll dropdown-content-last" to="/#contact">Contact</Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link className={"nav-link " + (location === "/experiences" ? "active" : "")} to="/experiences">Experience</Link>
                <div className="dropdown-content">
                  <a className="nav-link scroll" href="experiences.html#work-expereince">Work</a>
                  <a className="nav-link scroll" href="experiences.html#research-expereince">Research</a>
                  <a className="nav-link scroll" href="experiences.html#leadership-expereince">Leadership</a>
                  <a className="nav-link scroll" href="experiences.html#education">Education</a>
                  <a className="nav-link scroll dropdown-content-last" href="experiences.html#projects">Projects</a>
                </div>
              </div>
              <div className="nav-item">
                <Link className={"nav-link " + (location === "/publications" ? "active" : "")} to="/publications">Publications</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
