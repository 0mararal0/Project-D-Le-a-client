import React, { useEffect, useState } from "react";
import "./style-Pizza.css";
import { ProductCard } from "../../../components/card/ProductCard";
import { Footer } from "../../../components/footer/Footer";
import img1 from "../../../assets/images/pizza-home.jpg";
import axios from "axios";
import service from "../../../services/config";
import { AddProductProvider } from "../../../context/addproduct.context";

export const Pizza = () => {
  const [products, setProducts] = useState();

  const pasta = "pasta";
  useEffect(() => {
    product();
  }, []);
  const product = async () => {
    try {
      const response = await service.get(`/product/${pasta}`);

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-pizza">
      <section className="seccion1-pizza">
        <h2>Pizza</h2>
        <img src={img1} alt="" />
        {products &&
          products.map((elem) => {
            return (
              <div key={elem._id}>
                <AddProductProvider>
                  <ProductCard
                    title={elem.title}
                    ingredients={elem.ingredients}
                    price={elem.price}
                  />
                </AddProductProvider>
              </div>
            );
          })}
      </section>
      <div className="footer-drink">
        <Footer />
      </div>
    </div>
  );
};
