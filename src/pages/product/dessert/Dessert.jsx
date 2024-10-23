import { useContext, useEffect, useState } from "react";
import "./style-Dessert.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/auth.context";
import service from "../../../services/config";
import Container from "@mui/material/Container";
import { Footer } from "../../../components/footer/Footer";
import { ProductCard } from "../../../components/card/ProductCard";
import { ButtonComponent } from "../../../components/button/ButtonComponent";

export const Dessert = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    product();
  }, []);

  const product = async () => {
    try {
      const response = await service.get("/product/postre");
      setProducts(response.data);
    } catch {
      navigate("/error");
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
      <section className="container-dessert">
        <h4>Postre</h4>
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
        <div className="button-dessert">
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
    </div>
  );
};
