import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/config";
import "./style-product.css";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid2,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  styled,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

export const Product = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [ingredient, setIngredient] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [valueRadio, setValueRadio] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    products();
  }, [valueRadio]);

  const products = async () => {
    try {
      const response = await service.get("/admin/product");
      if (valueRadio === "all") {
        setDataProduct(response.data);
      } else {
        const result = response.data.filter(
          (producto) => producto.category === valueRadio
        );
        setDataProduct(result);
      }
    } catch {
      navigate("/error");
    }
  };

  const handleDeleted = async (id) => {
    try {
      await service.delete(`/admin/product/${id}`);
      products();
    } catch {
      navigate("/error");
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const handleSubmit = async () => {
    const addProduct = {
      title: name,
      description,
      ingredients: ingredient,
      category,
      price,
    };
    try {
      const response = await service.post("/admin/product", addProduct);
      console.log(response);
      products();
    } catch {
      navigate("/error");
    }
    setName("");
    setDescription("");
    setPrice(0);
    setIngredient("");
  };

  const handleChange = (e) => {
    setValueRadio(e.target.value);
  };

  return (
    <div className="container-product">
      <h4>Productos</h4>
      <Box
        sx={{ flexGrow: 1 }}
        paddingInline={10}
        marginBlock={5}
        component="form"
      >
        <Grid container spacing={0}>
          <Grid2
            item
            size={2}
            sx={{ backgroundColor: "white", padding: "10px 5px" }}
          >
            <TextField
              id="nombre"
              label="Nombre"
              variant="outlined"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputLabelProps={{
                sx: {
                  fontFamily: "Signika",
                },
              }}
              inputProps={{
                autoComplete: "new-password",
                sx: {
                  fontFamily: "Signika",
                },
              }}
            />
          </Grid2>
          <Grid2
            item
            size={3}
            sx={{ backgroundColor: "white", padding: "10px 5px" }}
          >
            <TextField
              id="descripcion"
              label="Descripción"
              variant="outlined"
              type="text"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              InputLabelProps={{
                sx: {
                  fontFamily: "Signika",
                },
              }}
              inputProps={{
                autoComplete: "new-password",
                sx: {
                  fontFamily: "Signika",
                },
              }}
            />
          </Grid2>
          <Grid2
            item
            size={3}
            sx={{ backgroundColor: "white", padding: "10px 5px" }}
          >
            <TextField
              id="ingredientes"
              label="Ingredientes"
              variant="outlined"
              fullWidth
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              InputLabelProps={{
                sx: {
                  fontFamily: "Signika",
                },
              }}
              inputProps={{
                autoComplete: "new-password",
                sx: {
                  fontFamily: "Signika",
                },
              }}
            />
          </Grid2>
          <Grid2
            item
            size={2}
            sx={{ backgroundColor: "white", padding: "10px 5px" }}
          >
            <FormControl fullWidth>
              <InputLabel
                id="categoria"
                sx={{
                  fontFamily: "signika",
                }}
              >
                Categoría
              </InputLabel>
              <Select
                sx={{
                  fontFamily: "signika",
                }}
                labelId="Categoría"
                id="categoria"
                label="Categoría"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                InputLabelProps={{
                  sx: {
                    fontFamily: "Signika",
                  },
                }}
                inputProps={{
                  autoComplete: "new-password",
                  sx: {
                    fontFamily: "Signika",
                  },
                }}
              >
                <MenuItem
                  sx={{
                    fontFamily: "signika",
                  }}
                  value={"pizza"}
                >
                  Pizza
                </MenuItem>
                <MenuItem
                  sx={{
                    fontFamily: "signika",
                  }}
                  value={"pasta"}
                >
                  Pasta
                </MenuItem>
                <MenuItem
                  sx={{
                    fontFamily: "signika",
                  }}
                  value={"ensalada"}
                >
                  Ensalada
                </MenuItem>
                <MenuItem
                  sx={{
                    fontFamily: "signika",
                  }}
                  value={"postre"}
                >
                  Postre
                </MenuItem>
                <MenuItem
                  sx={{
                    fontFamily: "signika",
                  }}
                  value={"bebida"}
                >
                  Bebida
                </MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2
            item
            size={1}
            sx={{ backgroundColor: "white", padding: "10px 5px" }}
          >
            <TextField
              label=""
              id="outlined-start-adornment"
              variant="outlined"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              InputLabelProps={{
                sx: {
                  fontFamily: "Signika",
                },
              }}
              inputProps={{
                autoComplete: "new-password",
                sx: {
                  fontFamily: "Signika",
                },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                },
              }}
            />
          </Grid2>
          <Grid2
            item
            size={1}
            sx={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="buttonAdd-product"
              onClick={handleSubmit}
              type="button"
            >
              Añadir
            </button>
          </Grid2>
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            row
            name="controlled-radio-buttons-group"
            value={valueRadio}
            onChange={handleChange}
            className="radio-product"
          >
            <FormControlLabel
              value="all"
              control={<Radio color="success" />}
              label="Todos"
            />
            <FormControlLabel
              value="pizza"
              control={<Radio color="success" />}
              label="Pizza"
            />
            <FormControlLabel
              value="pasta"
              control={<Radio color="success" />}
              label="Pasta"
            />
            <FormControlLabel
              value="ensalada"
              control={<Radio color="success" />}
              label="Ensalada"
            />
            <FormControlLabel
              value="postre"
              control={<Radio color="success" />}
              label="Postre"
            />
            <FormControlLabel
              value="bebida"
              control={<Radio color="success" />}
              label="Bebida"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ flexGrow: 1 }} paddingInline={10}>
        <Grid container spacing={0}>
          <Grid item size={2}>
            <Item
              sx={{
                backgroundColor: "GrayText",
                color: "white",
                fontFamily: "Signika",
              }}
            >
              Nombre
            </Item>
          </Grid>
          <Grid item size={3}>
            <Item
              sx={{
                backgroundColor: "GrayText",
                color: "white",
                fontFamily: "Signika",
              }}
            >
              Descripción
            </Item>
          </Grid>
          <Grid item size={3}>
            <Item
              sx={{
                backgroundColor: "GrayText",
                color: "white",
                fontFamily: "Signika",
              }}
            >
              Ingredientes
            </Item>
          </Grid>
          <Grid item size={1}>
            <Item
              sx={{
                backgroundColor: "GrayText",
                color: "white",
                fontFamily: "Signika",
              }}
            >
              Cat.
            </Item>
          </Grid>
          <Grid item size={1}>
            <Item
              sx={{
                backgroundColor: "GrayText",
                color: "white",
                fontFamily: "Signika",
              }}
            >
              Precio
            </Item>
          </Grid>
          <Grid item size={2}>
            <Item
              sx={{
                backgroundColor: "GrayText",
                color: "white",
                fontFamily: "Signika",
              }}
            >
              Eliminar
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div className="productList-product">
        {dataProduct &&
          dataProduct.map((elem) => {
            return (
              <Box
                key={elem._id}
                sx={{ flexGrow: 1 }}
                marginBlock={0.5}
                paddingInline={10}
              >
                <Grid container spacing={0}>
                  <Grid item size={2}>
                    <Item
                      sx={{
                        fontFamily: "Signika",
                      }}
                    >
                      {elem.title}
                    </Item>
                  </Grid>
                  <Grid item size={3}>
                    <Item
                      sx={{
                        fontFamily: "Signika",
                      }}
                    >
                      {elem.description}
                    </Item>
                  </Grid>
                  <Grid item size={3}>
                    <Item
                      sx={{
                        fontFamily: "Signika",
                      }}
                    >
                      {elem.ingredients}
                    </Item>
                  </Grid>
                  <Grid item size={1}>
                    <Item
                      sx={{
                        fontFamily: "Signika",
                      }}
                    >
                      {elem.category}
                    </Item>
                  </Grid>
                  <Grid item size={1}>
                    <Item
                      sx={{
                        fontFamily: "Signika",
                      }}
                    >
                      {elem.price}€
                    </Item>
                  </Grid>
                  <Grid item size={2}>
                    <Item>
                      <button
                        className="button-product"
                        onClick={() => handleDeleted(elem._id)}
                      >
                        Eliminar
                      </button>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            );
          })}{" "}
      </div>{" "}
    </div>
  );
};
