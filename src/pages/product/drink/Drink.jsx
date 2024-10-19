import React from "react";
import img1 from "../../../assets/images/bebidaHome.webp";
import "./style-Drink.css";
import { Footer } from "../../../components/footer/Footer";
export const Drink = () => {
  return (
    <div>
      <section className="seccion1-drink">
        <h2>Nuestros Brebajes</h2>
        <img src={img1} alt="" />
      </section>
      <Footer />
    </div>
  );
};
