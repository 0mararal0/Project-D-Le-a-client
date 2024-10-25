import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { AddProductContext } from "../../context/addproduct.context";
import service from "../../services/config";
import "./style-Sumary.css";
import { Box, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonComponent } from "../../components/button/ButtonComponent";

export const Sumary = () => {
  const [totalAmount, setTotalAmount] = useState();
  const [address, setAddress] = useState();
  const [floor, setFloor] = useState();
  const [letter, setLetter] = useState();
  const [cp, setCp] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const [mssError, setMssError] = useState();
  const [mssErrorProduct, setMssErrorProduct] = useState();

  const { finalOrder, updateContext } = useContext(AddProductContext);
  const { loggedUserId } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    calculateTotal();
  }, []);

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
      product: finalOrder?.map((elem) => elem.id),
      totalAmount,
      usuario: loggedUserId,
      address,
      floor,
      letter,
      cp,
      city,
      province,
    };
    if (!address) {
      setMssError("dirección");
    } else if (!city) {
      setMssError("city");
    } else if (!finalOrder) {
      setMssErrorProduct("No hay productos añadidos");
    } else {
      try {
        await service.post("/user/order", data);
        localStorage.removeItem("order");
        updateContext();
        navigate("/");
      } catch {
        navigate("/error");
      }
    }
  };

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div>
      <section className="container-sumary">
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

        <div className="form-sumary">
          {" "}
          <Container>
            <Box component="form" maxWidth={600}>
              <div className="input-sumary">
                <p style={{ color: "black" }}>¿A dónde lo enviamos?</p>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      sx={{ paddingBlock: "10px", borderColor: "white" }}
                      fullWidth
                      name="no-autocomplete"
                      id="dirección"
                      label={"Calle, plaza, avd..."}
                      helperText={mssError === "dirección" && "campo requerido"}
                      error={mssError === "dirección" && true}
                      type="text"
                      autoComplete="new-password"
                      variant="outlined"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      inputProps={{
                        autoComplete: "new-password",
                        sx: {
                          fontFamily: "Signika",
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 4, sm: 2 }}>
                    <TextField
                      sx={{ paddingBlock: "10px", borderColor: "white" }}
                      fullWidth
                      name="no-autocomplete"
                      id="floor"
                      label={"Nº"}
                      type="text"
                      autoComplete="new-password"
                      variant="outlined"
                      value={floor}
                      onChange={(e) => setFloor(e.target.value)}
                      inputProps={{
                        autoComplete: "new-password",
                        sx: {
                          fontFamily: "Signika",
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 4, sm: 2 }}>
                    <TextField
                      sx={{ paddingBlock: "10px", borderColor: "white" }}
                      fullWidth
                      name="no-autocomplete"
                      id="letter"
                      label={"Letra"}
                      type="text"
                      autoComplete="new-password"
                      variant="outlined"
                      value={letter}
                      onChange={(e) => setLetter(e.target.value)}
                      inputProps={{
                        autoComplete: "new-password",
                        sx: {
                          fontFamily: "Signika",
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 4, sm: 2 }}>
                    <TextField
                      sx={{ paddingBlock: "10px", borderColor: "white" }}
                      fullWidth
                      name="no-autocomplete"
                      id="codigo postal"
                      label={"C.P."}
                      type="text"
                      autoComplete="new-password"
                      variant="outlined"
                      value={cp}
                      onChange={(e) => setCp(e.target.value)}
                      inputProps={{
                        autoComplete: "new-password",
                        sx: {
                          fontFamily: "Signika",
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      sx={{ paddingBlock: "10px", borderColor: "white" }}
                      fullWidth
                      name="no-autocomplete"
                      id="ciudad"
                      label={"Ciudad"}
                      helperText={mssError === "city" && "campo requerido"}
                      error={mssError === "city" && true}
                      type="text"
                      autoComplete="new-password"
                      variant="outlined"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      inputProps={{
                        autoComplete: "new-password",
                        sx: {
                          fontFamily: "Signika",
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      sx={{ paddingBlock: "10px", borderColor: "white" }}
                      fullWidth
                      name="no-autocomplete"
                      id="provincia"
                      label={"Provincia"}
                      type="text"
                      autoComplete="new-password"
                      variant="outlined"
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      inputProps={{
                        autoComplete: "new-password",
                        sx: {
                          fontFamily: "Signika",
                        },
                      }}
                    />
                  </Grid>
                  {!finalOrder && (
                    <Grid size={{ xs: 12 }}>
                      <div>
                        <p
                          style={{
                            fontFamily: "signika",
                            color: "red",
                          }}
                        >
                          {mssErrorProduct}
                        </p>
                      </div>
                    </Grid>
                  )}
                </Grid>
              </div>
            </Box>
          </Container>
        </div>

        <div className="button-sumary">
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
    </div>
  );
};
