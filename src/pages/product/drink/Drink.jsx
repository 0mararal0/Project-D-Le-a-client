import img1 from "../../../assets/images/bebidaHome.webp";
import "./style-Drink.css";
import { Footer } from "../../../components/footer/Footer";
import { ProductCard } from "../../../components/card/ProductCard";
export const Drink = () => {
  return (
    <div className="container-drink">
      <section className="seccion1-drink">
        <h2>Bebidas</h2>
        <img src={img1} alt="" />
        <ProductCard />
      </section>
      <div className="footer-drink">
        <Footer />
      </div>
    </div>
  );
};
