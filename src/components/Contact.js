import { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  };

  const form = useRef();
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({ success: false, message: "" });
  const [showNotification, setShowNotification] = useState(false); // Estado para mostrar la notificación

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const sendEmail = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    setStatus({ success: false, message: "" });

    try {
      formDetails.user_phone = e.target.user_phone.value;
      formDetails.user_email = e.target.user_email.value;

      await emailjs.sendForm(
        "service_s8nsuqe",
        "template_kvyhwxl",
        form.current,
        "1bPYmt_sCjI1zrrLw"
      );
      setButtonText("Enviar");
      setStatus({ success: true, message: "Mensaje enviado correctamente" });
      form.current.reset();
      setFormDetails({ ...formInitialDetails, user_phone: "" });

      // Mostrar la notificación de éxito
      setShowNotification(true);

      // Ocultar la notificación después de 3 segundos
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      setButtonText("Enviar");
      setStatus({
        success: false,
        message: "Ha ocurrido un error, por favor vuelva a intentar",
      });
    }
  };

  return (
    <div className="contact" id="connect">
      <Container style={{ marginBottom: 0 }}>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact" />
          </Col>
          <Col md={6}>
            <h2>Contáctame :D</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.user_name}
                    placeholder="Nombre"
                    name="user_name"
                    onChange={(e) => onFormUpdate("user_name", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.user_email}
                    placeholder="Correo electrónico"
                    name="user_email"
                    onChange={(e) => onFormUpdate("user_email", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.user_phone}
                    placeholder="Número de teléfono"
                    name="user_phone"
                    onChange={(e) => onFormUpdate("user_phone", e.target.value)}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Deja un mensaje"
                    name="message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={12} >
                  <button type="submit" className="hover-button">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {showNotification && (
                  <Col>
                    <div
                      className={`notification ${status.success ? "success" : "danger"
                        }`}
                    >
                      {status.message}
                    </div>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <footer className="footer" style={{ marginTop: 0 }}>
        <p>Un proyecto de Franco Mariño</p>
      </footer>
    </div>
  );
};
