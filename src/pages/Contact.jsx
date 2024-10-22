import "./style-Contact.css";
import { Footer } from "../components/footer/Footer";
import Container from "@mui/material/Container";

export const Contact = () => {
  return (
    <div>
      <div className="container-contact">
        <h4>Contacto</h4>
        <Container>
          <section className="section-contact">
            <h6>¡Nos encantaría saber de ti!</h6>
            <p>
              Si tienes alguna pregunta, quieres hacer una reserva, o
              simplemente deseas compartir tu experiencia con nosotros, no dudes
              en ponerte en contacto. Nuestro equipo está aquí para ayudarte y
              asegurarse de que tu visita a Pizzeria D-Leña sea inolvidable.
            </p>
          </section>
          <section className="section-contact">
            <h6>Información de Contacto</h6>
            <p>
              <strong>Dirección</strong>Calle de la Pizza, 123 28001 Madrid,
              España
            </p>
            <p>
              <strong>Teléfono:</strong>+34 91 123 45 67
            </p>
            <p>
              <strong>Correo Electrónico:</strong> info@dlena.es
            </p>
          </section>
          <section className="section-contact">
            <h6>Horario de Apertura</h6>
            <p>
              Lunes a Viernes: 12:00 - 23:00 Sábado y Domingo: 12:00 - 24:00
            </p>
          </section>
          <section className="section-contact">
            <h6>Formulario de Contacto</h6>
            <p>
              Si prefieres, también puedes enviarnos un mensaje a través del
              siguiente formulario y te responderemos lo antes posible.
            </p>
            <form action="">
              <label>
                Nombre:
                <br />
                <input type="text" id="name" name="name" required />
              </label>
              <br></br>
              <label>
                Correo Electrónico:
                <br />
                <input type="email" id="email" name="email" required />
              </label>
              <br></br>
              <label>
                Mensaje:
                <br />
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </label>
              <br></br>
              <input type="submit" value="Enviar"></input>
            </form>
          </section>
          <section className="section-contact">
            <h6>Redes Sociales</h6>
            <p>
              Facebook: facebook.com/pizzeriatradizionale Instagram:
              instagram.com/pizzeriatradizionale Twitter:
              twitter.com/pizzeriatradizionale
            </p>
          </section>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
