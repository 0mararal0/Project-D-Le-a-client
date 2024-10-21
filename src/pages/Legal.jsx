import "./style-Legal.css";
import { Footer } from "../components/footer/Footer";
import Container from "@mui/material/Container";
export const Legal = () => {
  return (
    <div>
      <div className="container-legal">
        <h4>Términos legales</h4>
        <Container>
          <section className="section-legal">
            <h6>1. Introducción</h6>
            <p>
              Bienvenidos a <strong>Pizzeria D-Leña.</strong> Estos Términos y
              Condiciones rigen el uso de nuestra aplicación y nuestros
              servicios. Al utilizar nuestra aplicación, aceptas estos términos
              en su totalidad. Si no estás de acuerdo con alguna parte, no
              deberías usar nuestra aplicación.
            </p>
          </section>
          <section className="section-legal">
            <h6>2. Uso de la Aplicación</h6>
            <p>
              <strong>Registro:</strong> Para utilizar ciertas funciones, es
              posible que necesites registrarte proporcionando información veraz
              y actualizada
            </p>
            <p>
              <strong>Privacidad:</strong> Respetamos tu privacidad. Consulta
              nuestra Política de Privacidad para más detalles sobre cómo
              manejamos tus datos.
            </p>
            <p>
              <strong>Seguridad:</strong> Eres responsable de mantener la
              confidencialidad de tus credenciales de acceso.
            </p>
          </section>
          <section className="section-legal">
            <h6>3. Pedidos y Pagos</h6>
            <p>
              <strong>Realización de Pedidos:</strong>Puedes realizar pedidos a
              través de la aplicación. Asegúrate de revisar los detalles antes
              de confirmar tu pedido.
            </p>
            <p>
              <strong>Métodos de Pago::</strong> Aceptamos varios métodos de
              pago seguros. Los pagos deben realizarse en el momento de la
              confirmación del pedido.
            </p>
            <p>
              <strong>Cancelaciones:</strong> Una vez confirmado, no se pueden
              cancelar los pedidos. Revisa cuidadosamente tu pedido antes de
              confirmar.
            </p>
          </section>
          <section className="section-legal">
            <h6>4. Entrega y Recogida</h6>
            <p>
              <strong>Tiempos de Entrega: </strong>Hacemos todo lo posible por
              entregar dentro del tiempo estimado, pero los tiempos pueden
              variar. No nos hacemos responsables por retrasos fuera de nuestro
              control.
            </p>
            <p>
              <strong>Recogida en el Restaurante:</strong> Puedes optar por
              recoger tu pedido en nuestro restaurante. Asegúrate de hacerlo
              dentro del horario de apertura..
            </p>
          </section>
          <section className="section-legal">
            <h6>5. Limitación de Responsabilidad</h6>
            <p>
              <strong>Calidad del Servicio: </strong>Nos esforzamos por ofrecer
              un servicio de alta calidad, pero no garantizamos que nuestra
              aplicación esté libre de errores o interrupciones.
            </p>
            <p>
              <strong>Daños y Pérdidas: </strong> No seremos responsables por
              daños directos, indirectos, incidentales, especiales o
              consecuentes que surjan del uso de nuestra aplicación.
            </p>
          </section>

          <section className="section-legal">
            <h6>6. Modificaciones de los Términos</h6>
            <p>
              Nos reservamos el derecho de modificar estos Términos y
              Condiciones en cualquier momento. Te notificaremos sobre cambios
              importantes. El uso continuado de nuestra aplicación después de
              tales cambios constituye la aceptación de los nuevos términos.
            </p>
          </section>
          <section className="section-legal">
            <h6>7. Contacto</h6>
            <p>
              Si tienes alguna pregunta o inquietud acerca de estos Términos y
              Condiciones, por favor contáctanos a través de info@dlena.es.
            </p>
          </section>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
