import "./style-Drink.css";
import { Footer } from "../../../components/footer/Footer";
import Container from "@mui/material/Container";
import { AddProductProvider } from "../../../context/addproduct.context";
import { ProductCard } from "../../../components/card/ProductCard";
import { useEffect, useState } from "react";
import service from "../../../services/config";

export const Drink = () => {
  const [products, setProducts] = useState();

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
  return (
    <div>
      <section className="container-salad">
        <h4>Bebida</h4>
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
