import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(140 - Math.random() * 1);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Lokesh Chaudhari" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Lokesh Chaudhari" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  a passionate and dedicated final-year Computer Science and Engineering student at IIT Jodhpur. Throughout my academic journey, I’ve honed my technical skills through hands-on projects, coursework that have solidified my love for problem-solving and innovation.
                  </p>
                  <div className="d-flex gap-3">
                  <button className="btn" onClick={() => window.open('IIT_Resume.pdf', '_blank')}>
                    Download CV
                  </button>
                  <button onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
              </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
