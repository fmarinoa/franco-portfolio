import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import devWeb from '../assets/img/meter1.svg';
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../assets/img/color-sharp.png'
import colorSharp2 from '../assets/img/color-sharp2.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>¡Bienvenidos a mi mundo tecnológico! Aquí, te invito a explorar las habilidades que me definen:</p>
                            <Carousel responsive={responsive}
                                infinite={true}
                                autoPlay={true} // Habilita el auto-desplazamiento
                                autoPlaySpeed={3000} // Intervalo de tiempo en milisegundos (3 segundos en este ejemplo)
                                className="skill-slider">
                                <div className="item">
                                    <img src={devWeb} alt="image" />
                                    <h5>.NET</h5>
                                </div>
                                <div className="item">
                                    <img src={devWeb} alt="image" />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className="item">
                                    <img src={devWeb} alt="image" />
                                    <h5>UML</h5>
                                </div>
                                <div className="item">
                                    <img src={devWeb} alt="image" />
                                    <h5>Bizagi</h5>
                                </div>
                                <div className="item">
                                    <img src={devWeb} alt="image" />
                                    <h5>Metodologías Ágiles</h5>
                                </div>
                                <div className="item">
                                    <img src={devWeb} alt="image" />
                                    <h5>SQL Server</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}></img>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )

}