import { Col, Container, Row, Tab, Carousel } from "react-bootstrap";
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
    const projects = [
      {
        title: "Sistema de Gestión de Contactos Web",
        description:
          "Crea, edita, y gestiona contactos fácilmente, recibe correos de bienvenida y exporta a Excel con este completo proyecto web.",
        imgUrl: projImg1,
        link: "http://www.miscontactos.somee.com",
        repo:"https://github.com/francoedson/ContactoCRUD"
      },
      {
        title: "Licorería demo: MiMundo",
        description:
          "Explora nuestro catálogo digital de licores de alta calidad y encuentra tus favoritos en un solo lugar.",
        imgUrl: projImg2,
        link: "https://licoreriamimundo.netlify.app/",
        repo:"https://github.com/francoedson/LicoreriaMiMundo"
      },
      {
        title: "TaskMaker",
        description:
          "Agrega tareas en una interfaz muy intuitiva que se guardan en una base de datos en línea. También te permite marcar estas tareas como completadas.",
        imgUrl: projImg3,
        link: "http://www.taskmaker.somee.com",
        repo:"https://github.com/francoedson/ReactTasker"
      },
    ];
  
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
            <div className="skill-bx">
              <h2>Proyectos</h2>
              <p>Te invito a darle un vistazo a algunos de los proyectos que he realizado</p>
              <Carousel interval={3000}>
                {projects.map((project, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <Row>
                        <Col sm={6}>
                          <img src={project.imgUrl} alt={project.title} className="img-fluid" />
                        </Col>
                        <Col sm={6}>
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Ver proyecto
                          </a><br></br>
                          <a href={project.repo} target="_blank" rel="noopener noreferrer">
                            Ver repositorio
                          </a>
                        </Col>
                      </Row>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="Background" />
      </section>
    );
  };
  