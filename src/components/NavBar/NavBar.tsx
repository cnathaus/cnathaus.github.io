import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import { BrowserRouter as Router } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("aboutme");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#aboutme"
                className={
                  activeLink === "aboutme"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => setActiveLink("aboutme")}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => setActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#cv"
                className={
                  activeLink === "cv" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => setActiveLink("cv")}
              >
                CV
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              {/* // linkedIn icon */}
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/christian-nathaus-31728016a/"
                  target={"_blank"}
                  rel="noreferrer noopener"
                >
                  <img src={navIcon1} alt="" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
