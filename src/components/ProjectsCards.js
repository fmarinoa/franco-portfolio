import { Col } from "react-bootstrap"

export const ProjectsCards = ({ title, description, imgUrl, link }) => {
    return (
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <a target="_blank" href={link}>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
          </a>
        </div>
      </Col>
    );
  };
  