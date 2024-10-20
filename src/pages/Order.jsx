import React from "react";
import "./style-Order.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import pizzaOrder from "../assets/images/pizza-order.jpg";
import pastaOrder from "../assets/images/pasta-order.jpg";
import postreOrder from "../assets/images/postre-order.webp";
import ensaladaOrder from "../assets/images/ensalada-order.jpg";
import bebidaOrder from "../assets/images/bebida-order.jpg";
import { Container } from "@mui/material";
import { Footer } from "../components/footer/Footer";

export const Order = () => {
  const handlePizza = (e) => {
    console.log(e.target.id);
  };
  return (
    <section className="container-order">
      <h4>¿Qué te apetece?</h4>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Card className="card-order">
          <CardActionArea onClick={handlePizza}>
            <CardMedia
              id="pizza"
              component="img"
              height="140"
              image={pizzaOrder}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  textAlign: "center",
                  fontFamily: "signika",
                  fontSize: "2rem",
                }}
              >
                Pizza
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-order">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={pastaOrder}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  textAlign: "center",
                  fontFamily: "signika",
                  fontSize: "2rem",
                }}
              >
                Pasta
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-order">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ensaladaOrder}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  textAlign: "center",
                  fontFamily: "signika",
                  fontSize: "2rem",
                }}
              >
                Ensalada
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-order">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={postreOrder}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  textAlign: "center",
                  fontFamily: "signika",
                  fontSize: "2rem",
                }}
              >
                Postre
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-order">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={bebidaOrder}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  textAlign: "center",
                  fontFamily: "signika",
                  fontSize: "2rem",
                }}
              >
                Bebida
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
      <Footer />
    </section>
  );
};
