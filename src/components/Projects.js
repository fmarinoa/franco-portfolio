import { Col, Container, Row, Tab } from "react-bootstrap"
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { ProjectsCards } from "./ProjectsCards";


export const Projects = () => {
    const projects = [
        {
            title: "Sistema de Gestión de Contactos Web",
            description: "Crea, edita, y gestiona contactos fácilmente, recibe correos de bienvenida y exporta a Excel con este completo proyecto web.",
            imgUrl: projImg1,
            link: "http://www.miscontactos.somee.com"
        },
        {
            title: "Licorería demo: MiMundo",
            description: "Explora nuestro catálogo digital de licores de alta calidad y encuentra tus favoritos en un solo lugar.",
            imgUrl: projImg2,
            link: "https://licoreriamimundo.netlify.app/"
        },
        {
            title: "TaskMaker",
            description: "Agrega tareas en una interfaz muy intuitiva que se guardan en una base de datos en línea. También te permite marcar estas tareas como completadas.",
            imgUrl: projImg3,
            link: "http://www.taskmaker.somee.com"
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Te invito a dale un vistazo a algunos de los proyectos que he realizado</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((projects,index)=>{
                                            return(
                                                <ProjectsCards
                                                    key={index}
                                                    {...projects}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}