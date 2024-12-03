import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/profile-img-removebg-preview.png"; // Replace with your actual photo
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
  const toRotate = ["Computer Science Student", "Web Developer"];
  const period = 1000;

  // State for toggling section descriptions
  const [activeSection, setActiveSection] = useState("");

  // Define the tick function before useEffect to avoid ReferenceError
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(75);
    } else {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const handleSectionToggle = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  return (
    <section className="banner" id="about-me">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Profile Photo */}
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                >
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="profile-img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* Right Side - Interactive Section */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Ayatallah`}
                    <br />
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Computer Science Student", "Web Developer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p id="description">
                    I have always been fascinated by the power of technology and how it can be used to make a positive impact on our daily lives. This is what led me to pursue a career in web development.
                  </p>
                  <h2 className="about-me-static">About Me</h2>
                  <div className="info-section">
                    <div id="education">
                      <button className="info-button" onClick={() => handleSectionToggle("education")}>
                        Education
                      </button>
                      {activeSection === "education" && (
                        <div className="info-description" style={{ fontSize: "1.2rem" }}>
                          <ul>
                            <li>
                              <strong style={{ color: "purple" }}>Software Engineering and Information Systems</strong>
                              <br />
                              Higher Institute of Applied Sciences and Technology of Sousse, 2021 - 2025 (Bachelor's degree)
                            </li>
                            <li>
                              <strong style={{ color: "purple" }}>Baccalaureate Degree in Mathematics</strong>
                              <br />
                              High School Mourouj 6 Ehdeth, 2018 - 2022 (Diploma)
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div>
                      <button className="info-button" onClick={() => handleSectionToggle("experience")}>
                        Professional Experience
                      </button>
                      {activeSection === "experience" && (
                        <div className="info-description" style={{ fontSize: "1.2rem" }}>
                          <ul>
                            <li>
                              <strong style={{ color: "purple" }}>Seasonal</strong>
                              <br />
                              Poste Tunisienne Tunis R.P, Jul 2024 - Aug 2024
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div>
                      <button className="info-button" onClick={() => handleSectionToggle("activities-leadership")}>
                        Activities and Leadership
                      </button>
                      {activeSection === "activities-leadership" && (
                        <div className="info-description" style={{ fontSize: "1.2rem" }}>
                          <ul>
                            <li>
                              <strong style={{ color: "purple" }}>Google Developer Groups On Campus</strong>
                              <br />
                              Core team member / ex EER Committee member / TM Committee member and treasurer, Dec 2023 – Present
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={{ marginTop: "1rem" }}>
                    <a
                      href="/Ayatallah_Trabelsi_Resume.pdf" // Replace with the correct path to your CV file
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-cv-button"
                      style={{
                        display: "inline-block",
                        marginTop: "0.5rem",
                        textDecoration: "none",
                        backgroundColor: "purple",
                        color: "#fff",
                        padding: "0.5rem 1rem",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        textAlign: "center"
                      }}
                    >
                      View CV
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
