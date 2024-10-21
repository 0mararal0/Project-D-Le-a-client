import { AuthContext } from "../../../context/auth.context";
import { Footer } from "../../../components/footer/Footer";
import Container from "@mui/material/Container";
import { AddProductProvider } from "../../../context/addproduct.context";
import { ProductCard } from "../../../components/card/ProductCard";
import { useContext, useEffect, useState } from "react";
import service from "../../../services/config";
import "./style-Salad.css";
import { ButtonComponent } from "../../../components/button/ButtonComponent";
import { useNavigate } from "react-router-dom";

export const Salad = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  const ensalada = "ensalada";
  useEffect(() => {
    product();
  }, []);
  const product = async () => {
    try {
      const response = await service.get(`/product/${ensalada}`);

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
        <h4>Ensalada</h4>
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
        <div className="button-salad">
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
