import { AuthContext } from "../../../context/auth.context";
import React, { useContext, useEffect, useState } from "react";
import "./style-Pizza.css";
import { ProductCard } from "../../../components/card/ProductCard";
import { Footer } from "../../../components/footer/Footer";
import img1 from "../../../assets/images/pizza-home.jpg";
import axios from "axios";
import service from "../../../services/config";
import {
  AddProductContext,
  AddProductProvider,
} from "../../../context/addproduct.context";
import Container from "@mui/material/Container";
import { ButtonComponent } from "../../../components/button/ButtonComponent";
import { useNavigate } from "react-router-dom";

export const Pizza = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const { setSumary } = useContext(AddProductContext);

  const pizza = "pizza";
  useEffect(() => {
    product();
  }, []);
  const product = async () => {
    try {
      const response = await service.get(`/product/${pizza}`);

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFinish = () => {
    if (isLoggedIn) {
      navigate("/user/sumary");
    } else {
      navigate("/login");
    }
  };
  const handleAddProduct = () => navigate("/order");
  const handleCanceled = () => navigate("/");

  return (
    <div>
      <section className="container-pizza">
        <h4>Pizza</h4>
        <Container>
          {products &&
            products.map((elem) => {
              return (
                <div key={elem._id}>
                  <ProductCard
                    title={elem.title}
                    ingredients={elem.ingredients}
                    price={elem.price}
                    id={elem._id}
                  />
                </div>
              );
            })}
        </Container>
        <div className="button-pizza">
          <ButtonComponent
            textButton={"Finalizar"}
            functionButton={handleFinish}
          />
          <ButtonComponent
            textButton={"Otro Complemento"}
            functionButton={handleAddProduct}
          />
          <ButtonComponent
            textButton={"Cancelar"}
            functionButton={handleCanceled}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};
