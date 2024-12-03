import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/islamourous.jpg";
import projImg2 from "../assets/img/block_dodger.png";
import projImg3 from "../assets/img/ballon popper.png";
import projImg4 from "../assets/img/carrot collector.png";
import projImg5 from "../assets/img/visiosim.PNG";
import projImg6 from "../assets/img/news.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Islamourous",
      description: "Discord Bot",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Ayatallah-Trabelsi/Islamourous.git",
    },
    {
      title: "Carrot Collector",
      description: "Unity 2D game",
      imgUrl: projImg4,
      githubUrl: "https://github.com/Ayatallah-Trabelsi/Carrot-Collector.git",
    },
    {
      title: "Block Dodger",
      description: "Unity 2D game",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Ayatallah-Trabelsi/Block-_-Dodge.git",
    },
    {
      title: "Balloon Popper",
      description: "Unity 2D game",
      imgUrl: projImg3,
      githubUrl: "https://github.com/Ayatallah-Trabelsi/Balloon-Popper.git",
    },
    {
      title: "News Article Search Website",
      description: "Allows users to search for news.",
      imgUrl: projImg6,
      githubUrl: "https://github.com/Ayatallah-Trabelsi/News_Search_App.git",
    },
    {
      title: "VisioSIM",
      description: "Search engine that generates similar visuals.",
      imgUrl: projImg5,
      githubUrl: "https://github.com/Ayatallah-Trabelsi/Indexation.git",
    },
  ];

  // Group projects into chunks of 3 for each tab
  const chunkedProjects = [];
  for (let i = 0; i < projects.length; i += 3) {
    chunkedProjects.push(projects.slice(i, i + 3));
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="tab-0">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {chunkedProjects.map((_, index) => (
                        <Nav.Item key={`tab-nav-${index}`}>
                          <Nav.Link eventKey={`tab-${index}`}>{`Tab ${index + 1}`}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content>
                      {chunkedProjects.map((chunk, index) => (
                        <Tab.Pane eventKey={`tab-${index}`} key={`tab-pane-${index}`}>
                          <Row>
                            {chunk.map((project, idx) => (
                              <Col md={4} key={`project-${idx}`}>
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ textDecoration: "none", color: "inherit" }}
                                >
                                  <ProjectCard {...project} />
                                </a>
                              </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
