import { Link } from "react-router-dom";
import "./style-Footer.css";
import fondoFooter from "../../assets/images/imgFooter.jpg";

export const Footer = () => {
  return (
    <footer className="container-footer">
      <h5 style={{ color: "white" }}>D-Leña</h5>
      <h6>By Alberto Marcos</h6>
      <img src={fondoFooter} alt="" />
      <p>
        <Link to={"/legal"} style={{ textDecoration: "none", color: "white" }}>
          @Todos los derechos reservados
        </Link>
      </p>
    </footer>
  );
};
