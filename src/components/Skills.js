import meter1 from "../assets/img/HTML.webp";
import meter2 from "../assets/img/css-removebg-preview.png";
import meter3 from "../assets/img/js.webp";
import meter4 from "../assets/img/nodejs.webp";
import meter5 from "../assets/img/REACT.webp";
import meter6 from "../assets/img/PYTHON.webp";
import meter7 from "../assets/img/JAVA.webp";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                     
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="HTML Logo" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="CSS Logo" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="JavaScript Logo" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Node.js Logo" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="React.js Logo" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Python Logo" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Java Logo" />
                                <h5>Java</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background decorative pattern" />
    </section>
  )
}
