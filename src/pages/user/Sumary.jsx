import { Box, Container, Icon } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./style-Sumary.css";

import { ButtonComponent } from "../../components/button/ButtonComponent";
import { Footer } from "../../components/footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AddProductContext } from "../../context/addproduct.context";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import service from "../../services/config";
import { AuthContext } from "../../context/auth.context";

export const Sumary = () => {
  const [totalAmount, setTotalAmount] = useState();
  const { finalOrder, updateContext } = useContext(AddProductContext);
  const { loggedUserId } = useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    calculateTotal();
  }, []);
  console.log(finalOrder);
  const handleDelete = (e) => {
    const newResult = finalOrder.filter((elem) => elem.idOrder !== e);
    const addOrderString = JSON.stringify(newResult);
    localStorage.setItem("order", [addOrderString]);
    updateContext();
    calculateTotal();
  };

  const calculateTotal = () => {
    const retrievedOrderString = localStorage.getItem("order");
    const retrievedOrder = JSON.parse(retrievedOrderString);

    if (retrievedOrder) {
      const resultAmount = retrievedOrder.reduce((acc, elem) => {
        return acc + parseFloat(elem.price * elem.quantity);
      }, 0);
      setTotalAmount(resultAmount);
    }
  };

  const handlePlaceOrder = async () => {
    const data = {
      product: finalOrder.map((elem) => elem.id),
      totalAmount,
      usuario: loggedUserId,
    };
    try {
      const response = await service.post("/user/order", data);
      console.log(response);
      localStorage.removeItem("order");
      updateContext();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div>
      <section className="container-pizza">
        <h4>Resumen del pedido</h4>
        <Container>
          <Box maxWidth={600}>
            <Grid container>
              <Grid size={5}>
                <h6 className="rowProduct-sumary rowDescription-sumary">
                  Descripción
                </h6>
              </Grid>
              <Grid size={2}>
                <h6 className="rowProduct-sumary rowDescription-sumary">
                  Cantidad
                </h6>
              </Grid>
              <Grid size={2}>
                <h6 className="rowProduct-sumary rowDescription-sumary">
                  Precio
                </h6>
              </Grid>
              <Grid size={2}>
                <h6 className="rowProduct-sumary rowDescription-sumary">
                  Total
                </h6>
              </Grid>
              <Grid size={1}></Grid>
            </Grid>
          </Box>
          {finalOrder &&
            finalOrder.map((elem, index) => {
              return (
                <Box key={index}>
                  <Grid container maxWidth={600}>
                    <Grid size={5}>
                      <p className="rowProduct-sumary">{elem.title}</p>
                    </Grid>
                    <Grid size={2}>
                      <p className="rowProduct-sumary">{elem.quantity}</p>
                    </Grid>
                    <Grid size={2}>
                      <p className="rowProduct-sumary">{elem.price}€</p>
                    </Grid>
                    <Grid size={2}>
                      <p className="rowProduct-sumary">
                        {elem.price * elem.quantity}€
                      </p>
                    </Grid>
                    <Grid size={1}>
                      <button
                        onClick={() => handleDelete(elem.idOrder)}
                        className="buttonDeleted-sumary"
                      >
                        <DeleteIcon
                          sx={{
                            color: "white",
                            transition: ".3s",
                            "&:hover": { color: "#b8001f", transition: ".3s" },
                          }}
                        />
                      </button>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}

          <Box>
            <Grid container maxWidth={600}>
              <Grid size={6}></Grid>
              <Grid size={3}>
                <p className="rowProduct-sumary rowDescription-sumary">TOTAL</p>
              </Grid>
              <Grid size={2}>
                <p className="rowProduct-sumary rowDescription-sumary">
                  {totalAmount}€
                </p>
              </Grid>
              <Grid size={1}></Grid>
            </Grid>
            <Grid container maxWidth={600}>
              <Grid size={6}></Grid>
              <Grid size={3}>
                <p className="rowProduct-sumary rowDescription-sumary">
                  Base IVA 10%
                </p>
              </Grid>
              <Grid size={2}>
                <p className="rowProduct-sumary rowDescription-sumary">
                  {(totalAmount * 0.9).toFixed(2)}€
                </p>
              </Grid>
              <Grid size={1}></Grid>
            </Grid>
            <Grid container maxWidth={600}>
              <Grid size={6}></Grid>
              <Grid size={3}>
                <p className="rowProduct-sumary rowDescription-sumary">
                  IVA 10%
                </p>
              </Grid>
              <Grid size={2}>
                <p className="rowProduct-sumary rowDescription-sumary">
                  {(totalAmount * 0.1).toFixed(2)}€
                </p>
              </Grid>
              <Grid size={1}></Grid>
            </Grid>
          </Box>
        </Container>
        <div className="button-pizza">
          <ButtonComponent
            textButton={"Realizar Pedido"}
            functionButton={handlePlaceOrder}
          />
          <ButtonComponent
            textButton={"Volver"}
            functionButton={handleReturn}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};
