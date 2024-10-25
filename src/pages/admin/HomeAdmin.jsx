import { useNavigate } from "react-router-dom";
import "./style-homeAdmin.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Product from "../../assets/images/pasta.png";
import User from "../../assets/images/user.webp";
import Statistic from "../../assets/images/statistic.png";

export const HomeAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="container-homeAdmin">
      <h4>Panel de Admnistrador</h4>
      <div className="containerCard-homeAdmin">
        <Card className="card-homeAdmin">
          <CardActionArea>
            <CardMedia
              id="product"
              component="img"
              height="150"
              src={Product}
              alt="product"
              onClick={() => navigate("/admin/product")}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  textAlign: "center",
                  fontFamily: "signika",
                  fontSize: "1.3rem",
                  margin: 0,
                  padding: 0,
                }}
              >
                Productos
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-homeAdmin">
          <CardActionArea>
            <CardMedia
              id="user"
              component="img"
              height="150"
              src={User}
              alt="usuario"
              onClick={() => navigate("/admin/user")}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  textAlign: "center",
                  fontFamily: "signika",
                  fontSize: "1.3rem",
                  margin: 0,
                  padding: 0,
                }}
              >
                Usuarios
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className="card-homeAdmin">
          <CardActionArea>
            <CardMedia
              id="statistic"
              component="img"
              height="150"
              src={Statistic}
              alt="estadisticas"
              onClick={() => navigate("/admin/statistics")}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  textAlign: "center",
                  fontFamily: "signika",
                  fontSize: "1.3rem",
                  margin: 0,
                  padding: 0,
                }}
              >
                Estadísticas
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};
