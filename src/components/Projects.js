import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Clustify-img-copy.png";
import projImg2 from "../assets/img/e-commerce-img.png";
import projImg3 from "../assets/img/movie-img.png";
import projImg4 from "../assets/img/garbage-img.png";
import projImg5 from "../assets/img/e-commerce-img.png";
import projImg6 from "../assets/img/p2p-img.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Clustify",  
      description: "Face-Clustering WebApp",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Lokesh-1015/Face-Clustering-WebApp",
      liveDemoUrl: "https://clustify.up.railway.app/",
    },
    {
      title: "E-Commerce Website",
      description: "A fully functional full-stack e-commerce platform",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Lokesh-1015/Face-Clustering-WebApp",
      liveDemoUrl: "https://clustify.up.railway.app/",
    },
    {
      title: "Movie-Recommender-System",  
      description: "Deep-Learning",
      imgUrl: projImg3,
      githubUrl: "https://github.com/Lokesh-1015/movie-recommender-system",
      liveDemoUrl: "https://movie-recommender-system-4had.onrender.com",
    },
    {
      title: "Garbage-Detection using YOLOv7",
      description: "A robust garbage detection system leveraging YOLOv7 for real-time waste identification and classification",
      imgUrl: projImg4,
      githubUrl: "https://github.com/Lokesh-1015/Garbage-Detection-using-YOLOv7-Technique",
    },
    {
      title: "SIFT-Object Detection",
      description: "Implemented SIFT from scratch for object identification and similarity detection in real-time using live camera images",
      imgUrl: projImg5,
      githubUrl: "https://github.com/Shrashti04/Object-Detection-using-SIFT"
    },
    {
      title: "P2P-Gossip-Network",
      description: "A Gossip protocol over a peer-to-peer network to broadcast messages and check the liveness of connected peers",
      imgUrl: projImg6,
      githubUrl: "https://github.com/Lokesh-1015/P2P-Gossip-Network",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore a selection of my projects that demonstrate my skills and creativity in solving real-world challenges.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
