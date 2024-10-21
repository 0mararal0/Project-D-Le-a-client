import { AuthContext } from "../../../context/auth.context";
/* import { AddProductContext } from "../../context/addproduct.context"; */
import "./style-Dessert.css";
import { Footer } from "../../../components/footer/Footer";
import Container from "@mui/material/Container";
import { AddProductProvider } from "../../../context/addproduct.context";
import { ProductCard } from "../../../components/card/ProductCard";
import { useContext, useEffect, useState } from "react";
import service from "../../../services/config";
import { ButtonComponent } from "../../../components/button/ButtonComponent";
import { useNavigate } from "react-router-dom";

export const Dessert = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  const postre = "postre";
  useEffect(() => {
    product();
  }, []);
  const product = async () => {
    try {
      const response = await service.get(`/product/${postre}`);

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(products);

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

      <Footer />
    </div>
  );
};
