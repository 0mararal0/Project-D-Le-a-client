import React from "react";
import "./styleHomePage.css";
import { Container } from "@mui/material";
import imgHome1 from "../assets/images/home1.jpg";
import iconPizza from "../assets/images/pizza.png";
import iconPasta from "../assets/images/pasta.png";
import iconEnsalada from "../assets/images/ensalada.png";
import iconPostre from "../assets/images/postre.png";
import iconBeber from "../assets/images/beber.png";
import { Footer } from "../components/footer/Footer";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="container-homePage">
        <img
          src={imgHome1}
          className="img1-homePage "
          alt="Foto Horno de leña"
        />
        <div className="title-homePage ">
          <h1>D-Leña</h1>
        </div>
        <Link to={"/product/pizza"}>
          <div className="iconoPizza-homePage">
            <h3>Pizza</h3>
            <img src={iconPizza} alt="icono pizza" />
          </div>
        </Link>
        <Link to={"/product/paste"}>
          <div className="iconoPasta-homePage">
            <h3>Pasta</h3>
            <img src={iconPasta} alt="icono pasta" />
          </div>
        </Link>
        <Link to={"/product/salad"}>
          <div className="iconoEnsalada-homePage">
            <h3>Ensalada</h3>
            <img src={iconEnsalada} alt="icono ensalada" />
          </div>
        </Link>
        <Link to={"/product/dessert"}>
          <div className="iconoPostre-homePage">
            <h3>Postre</h3>
            <img src={iconPostre} alt="icono postre" />
          </div>
        </Link>
        <Link to={"/product/drink"}>
          <div className="iconoBebida-homePage">
            <h3>Bebida</h3>
            <img src={iconBeber} alt="icono Bebida" />
          </div>
        </Link>
        <Footer />
      </div>
    </>
  );
};
