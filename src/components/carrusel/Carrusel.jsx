import "./style-Carrusel.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick";
import { Box } from "@mui/material";

export const Carrusel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <Box sx={{ width: "90%", maxWidth: "850px" }}>
      <Slider {...settings}>
        {images.map((imagen, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            <Link to={"/order"}>
              <img
                src={imagen}
                alt={`Imagen ${index + 1}`}
                className="image-carrusel"
              />
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
