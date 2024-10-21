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
import { useNavigate } from "react-router-dom";

export const Order = () => {
  const navigate = useNavigate();
  const handleSection = (e) => {
    if (e.target.id === "pizza") {
      navigate("/product/pizza");
    }
    if (e.target.id === "pasta") {
      navigate("/product/paste");
    }
    if (e.target.id === "ensalada") {
      navigate("/product/salad");
    }
    if (e.target.id === "postre") {
      navigate("/product/dessert");
    }
    if (e.target.id === "bebida") {
      navigate("/product/drink");
    }
  };
  return (
    <div>
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
            <CardActionArea onClick={handleSection}>
              <CardMedia
                id="pizza"
                component="img"
                height="140"
                image={pizzaOrder}
                alt="pizza"
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
            <CardActionArea onClick={handleSection}>
              <CardMedia
                id="pasta"
                component="img"
                height="140"
                image={pastaOrder}
                alt="pasta"
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
            <CardActionArea onClick={handleSection}>
              <CardMedia
                id="ensalada"
                component="img"
                height="140"
                image={ensaladaOrder}
                alt="ensalada"
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
            <CardActionArea onClick={handleSection}>
              <CardMedia
                id="postre"
                component="img"
                height="140"
                image={postreOrder}
                alt="postre"
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
            <CardActionArea onClick={handleSection}>
              <CardMedia
                id="bebida"
                component="img"
                height="140"
                image={bebidaOrder}
                alt="bebida"
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
      </section>
      <Footer />
    </div>
  );
};
