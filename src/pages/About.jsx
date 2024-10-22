import "./style-About.css";
import Container from "@mui/material/Container";
import { Footer } from "../components/footer/Footer";

export const About = () => {
  return (
    <div>
      <div className="container-about">
        <h4>Sobre Nosotros</h4>
        <Container>
          <section className="section-about">
            <h6>Tradición y Pasión por la Pizza</h6>
            <p>
              Bienvenidos a Pizzeria D-Leña, donde la tradición se mezcla con la
              pasión por la auténtica pizza italiana. Desde nuestros comienzos,
              nos hemos dedicado a traer el verdadero sabor de Italia a tu mesa,
              utilizando métodos tradicionales y los ingredientes más frescos.
            </p>
          </section>
          <section className="section-about">
            <h6>Nuestro Horno de Leña</h6>
            <p>
              El corazón de nuestra pizzería es nuestro horno de leña,
              cuidadosamente construido con materiales tradicionales que
              conservan el calor y proporcionan un sabor único a nuestras
              pizzas. Cada pizza que sale de nuestro horno está cocinada a la
              perfección, con una base crujiente y un sabor inigualable.
            </p>
          </section>
          <section className="section-about">
            <h6>Ingredientes Frescos y Auténticos</h6>
            <p>
              Creemos que una buena pizza comienza con los mejores ingredientes.
              Por eso, seleccionamos cada uno con mucho cuidado, desde el tomate
              madurado bajo el sol hasta la mozzarella fresca y el aceite de
              oliva virgen extra. Todos nuestros ingredientes son de origen
              local y siguen las tradiciones culinarias italianas.
            </p>
          </section>
          <section className="section-about">
            <h6>Nuestra Historia</h6>
            <p>
              Fundada en 2024, Pizzeria D-Leña es el resultado de la pasión de
              nuestra familia por la buena comida y la cultura italiana. Durante
              generaciones, hemos perfeccionado nuestras recetas, transmitiendo
              los secretos del arte pizzero de padres a hijos. Nuestro
              compromiso es ofrecer una experiencia auténtica y memorable a
              todos nuestros clientes.
            </p>
          </section>
          <section className="section-about">
            <h6>Compromiso con la Calidad</h6>
            <p>
              Cada pizza que servimos es un testimonio de nuestro compromiso con
              la calidad. Nuestro equipo de pizzeros expertos trabaja
              incansablemente para asegurar que cada bocado sea una explosión de
              sabor y satisfacción. Nos enorgullece ser una pizzería donde la
              tradición y la innovación se unen para crear algo verdaderamente
              especial.
            </p>
          </section>
          <section className="section-about">
            <h6>Ven y Descúbrelo por Ti Mismo</h6>
            <p>
              Te invitamos a visitarnos y a descubrir por qué Pizzeria
              Tradizionale es la mejor opción para los amantes de la auténtica
              pizza italiana. Siéntate, relájate y déjate llevar por los aromas
              y sabores que solo un horno de leña puede ofrecer.
            </p>
          </section>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
