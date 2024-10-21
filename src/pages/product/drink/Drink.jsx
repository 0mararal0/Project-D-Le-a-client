import { AuthContext } from "../../../context/auth.context";
import "./style-Drink.css";
import { Footer } from "../../../components/footer/Footer";
import Container from "@mui/material/Container";
import { AddProductProvider } from "../../../context/addproduct.context";
import { ProductCard } from "../../../components/card/ProductCard";
import { useContext, useEffect, useState } from "react";
import service from "../../../services/config";
import { ButtonComponent } from "../../../components/button/ButtonComponent";
import { useNavigate } from "react-router-dom";

export const Drink = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  const bebida = "bebida";
  useEffect(() => {
    product();
  }, []);
  const product = async () => {
    try {
      const response = await service.get(`/product/${bebida}`);

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
      <section className="container-salad">
        <h4>Bebida</h4>
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
        <div className="button-drink">
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
