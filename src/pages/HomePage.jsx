import { Link } from "react-router-dom";
import "./styleHomePage.css";

import iconPizza from "../assets/images/pizza.png";
import iconPasta from "../assets/images/pasta.png";
import iconEnsalada from "../assets/images/ensalada.png";
import iconPostre from "../assets/images/postre.png";
import iconBeber from "../assets/images/beber.png";

import Slider from "react-slick";
import { Carrusel } from "../components/carrusel/Carrusel";
import { MapLocation } from "../components/map/MapLocation";

export const HomePage = () => {
  const data = [
    "https://www.vamosacomer.eu/wp-content/uploads/2022/10/Plantilla-Foto-destacada-1-1024x466.png",
    "https://guiacercademi.com/wp-content/uploads/2023/09/Pizza-horno-de-lena-cerca-de-mi-ubicacion.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_cj5ShVqvotCFer7ew_lrOFFoZUcDzSIKw&s",
    "https://img.freepik.com/fotos-premium/muffins-pasas-horneados-cero-horno-lena-navideno_1043470-4958.jpg",
    "https://www.cocinaconalegria.com/wp-content/themes/yootheme/cache/34/en-este-tiempo-de-calor-como-armar-ensaladas-irresistibles-342e3995.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKchEc-u0wQ0GalOuez8vo7poDIzWpevK_AiltF70swsWsehPTCvaiZO7ISlkljoiGNQ&usqp=CAU",
    "https://hips.hearstapps.com/hmg-prod/images/ensalada-pasta-pera-nueces-elle-gourmet-65434cc84eaa4.jpg?crop=0.882xw:0.702xh;0.0637xw,0.296xh&resize=640:*",
  ];

  return (
    <>
      <div className="container-homePage">
        <h1>D-Leña</h1>

        <div className="icon-homePage">
          <Link to={"/product/pizza"} style={{ textDecoration: "none" }}>
            <div className="iconoPizza-homePage">
              <h3>Pizza</h3>
              <img src={iconPizza} alt="icono pizza" />
            </div>
          </Link>
          <Link to={"/product/paste"} style={{ textDecoration: "none" }}>
            <div className="iconoPasta-homePage">
              <h3>Pasta</h3>
              <img src={iconPasta} alt="icono pasta" />
            </div>
          </Link>
          <Link to={"/product/salad"} style={{ textDecoration: "none" }}>
            <div className="iconoEnsalada-homePage">
              <h3>Ensalada</h3>
              <img src={iconEnsalada} alt="icono ensalada" />
            </div>
          </Link>
          <Link to={"/product/dessert"} style={{ textDecoration: "none" }}>
            <div className="iconoPostre-homePage">
              <h3>Postre</h3>
              <img src={iconPostre} alt="icono postre" />
            </div>
          </Link>
          <Link to={"/product/drink"} style={{ textDecoration: "none" }}>
            <div className="iconoBebida-homePage">
              <h3>Bebida</h3>
              <img src={iconBeber} alt="icono Bebida" />
            </div>
          </Link>
        </div>
        <div className="carrusel-homePage">
          <div className="titleCarrusel-homePage">
            <h5>Nuestros Platos</h5>
          </div>
          <Carrusel images={data} />
        </div>
        <div className="mapLocation-homePage">
          <div className="titleMap-homePage">
            <h5>Ven a conocernos</h5>
            <div className="textMap-homePage">
              <p>Estamos en:</p>
              <p>Plaza mayor 1 Valladolid, España</p>
              <p>
                <strong>Teléfono:</strong> +34 699 69 96 99
              </p>
              <p>
                <strong>Correo Electrónico:</strong> info@dlena.es
              </p>
            </div>
          </div>
          <div className="map-homePage">
            <MapLocation />
          </div>
        </div>
      </div>
    </>
  );
};
