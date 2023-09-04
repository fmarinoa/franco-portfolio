import { Container,Row,Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import {headerImg} from "../assets/img/header-img.svg"

export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenido a mi Portafolio Web</span>
                        <h1>{`Hola, soy Franco `}<span className="wrap">Desarrollador WEB</span></h1>
                        <p>¡Hola! Soy Franco, un apasionado desarrollador de software de 19 años con sede en Lima, Perú. Desde que descubrí mi interés en el mundo de la programación, he estado trabajando incansablemente para mejorar mis habilidades y enfrentar desafíos emocionantes en el desarrollo de software. Mi enfoque principal es la creación de aplicaciones web modernas y dinámicas utilizando tecnologías como ASP.NET Core y ReactJS. Disfruto fusionando lo mejor de ambos mundos para crear experiencias de usuario excepcionales y eficientes.</p>
                        <button onClick={()=>console.log('connect')}>GO<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header image"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}