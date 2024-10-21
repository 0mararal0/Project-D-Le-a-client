import { useEffect, useState } from "react";
import "./style-product.css";
import { Footer } from "../../components/footer/Footer";
import {
  Box,
  FormControl,
  Grid2,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import service from "../../services/config";

export const Product = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [ingredient, setIngredient] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    products();
  }, []);
  const products = async () => {
    try {
      const response = await service.get("/admin/product");
      setDataProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleted = async (id) => {
    console.log(id);

    try {
      const response = await service.delete(`/admin/product/${id}`);
      console.log(response);
      products();
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
    }
    console.log(addProduct);
    setName("");
    setDescription("");
    setCategory("");
    setPrice(0);
    setIngredient("");
  };
  const prueba = (e) => {
    console.log(e.target.value);
  };
  console.log("category", category);

  return (
    <div className="container-product">
      <h4>Productos</h4>
      <Box
        sx={{ flexGrow: 1 }}
        paddingInline={10}
        marginBlock={8}
        component="form"
        /* onSubmit={handleSubmit} */
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
            />
          </Grid2>
          <Grid2
            item
            size={2}
            sx={{ backgroundColor: "white", padding: "10px 5px" }}
          >
            <FormControl fullWidth>
              <InputLabel id="categoria">Categoría</InputLabel>
              <Select
                labelId="Categoría"
                id="categoria"
                label="Categoría"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value={"pizza"}>Pizza</MenuItem>
                <MenuItem value={"pasta"}>Pasta</MenuItem>
                <MenuItem value={"ensalada"}>Ensalada</MenuItem>
                <MenuItem value={"postre"}>Postre</MenuItem>
                <MenuItem value={"bebida"}>Bebida</MenuItem>
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
            sx={{ backgroundColor: "white", padding: "10px 5px" }}
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

      <Box sx={{ flexGrow: 1 }} paddingInline={10}>
        <Grid container spacing={0}>
          <Grid item size={2}>
            <Item>Nombre</Item>
          </Grid>
          <Grid item size={2}>
            <Item>Descripción</Item>
          </Grid>
          <Grid item size={3}>
            <Item>Ingredientes</Item>
          </Grid>
          <Grid item size={1}>
            <Item>Categoría</Item>
          </Grid>
          <Grid item size={2}>
            <Item>Creado</Item>
          </Grid>
          <Grid item size={2}>
            <Item>Eliminar</Item>
          </Grid>
        </Grid>
      </Box>
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
                  <Item>{elem.title}</Item>
                </Grid>
                <Grid item size={2}>
                  <Item>{elem.description}</Item>
                </Grid>
                <Grid item size={3}>
                  <Item>{elem.ingredients}</Item>
                </Grid>
                <Grid item size={1}>
                  <Item>{elem.category}</Item>
                </Grid>
                <Grid item size={2}>
                  <Item>{elem.createdAt}</Item>
                </Grid>
                <Grid item size={2}>
                  <Item sx={{ backgroundColor: "red" }}>
                    <button
                      className="button-users"
                      onClick={() => handleDeleted(elem._id)}
                    >
                      Desbloquear
                    </button>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      <Footer />
    </div>
  );
};
