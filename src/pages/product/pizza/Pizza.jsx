import React, { useEffect, useState } from "react";
import "./style-Pizza.css";
import { ProductCard } from "../../../components/card/ProductCard";
import { Footer } from "../../../components/footer/Footer";
import img1 from "../../../assets/images/pizza-home.jpg";
import axios from "axios";
import service from "../../../services/config";
import { AddProductProvider } from "../../../context/addproduct.context";
import Container from "@mui/material/Container";

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
    <div>
      <section className="container-pizza">
        <h4>Pizza</h4>
        <Container>
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
        </Container>
      </section>

      <Footer />
    </div>
  );
};
