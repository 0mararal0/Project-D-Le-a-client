import { useEffect, useState } from "react";
import "./style-product.css";
import { Footer } from "../../components/footer/Footer";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
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
import service from "../../services/config";

export const Product = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [ingredient, setIngredient] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [valueRadio, setValueRadio] = useState("all");

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
      products();
    } catch (error) {
      console.log(error);
    }
    console.log(addProduct);
    setName("");
    setDescription("");

    setPrice(0);
    setIngredient("");
  };

  /* const hadleRadioAll = (e) => {
    console.log(e.target.value);
  };
  const hadleRadioPizza = (e) => {
    console.log(e.target.value);
  };
  const hadleRadioPasta = (e) => {
    console.log(e.target.value);
  };
  const hadleRadioEnsalada = (e) => {
    console.log(e.target.value);
  };
  const hadleRadioPostre = (e) => {
    console.log(e.target.value);
  };
  const hadleRadioBebida = (e) => {
    console.log(e.target.value);
  }; */
  const handleChange = (e) => {
    setValueRadio(e.target.value);

    console.log(e.target.value);
  };

  return (
    <div className="container-product">
      <h4>Productos</h4>
      <Box
        sx={{ flexGrow: 1 }}
        paddingInline={10}
        marginBlock={5}
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
      {/*  <div className="radio-product">
        <div className="radioProduct-produc">
          <Radio value="todos" color="success" onChange={hadleRadioAll} />
          <p>Todos</p>
        </div>
        <div className="radioProduct-produc">
          <Radio value="pizza" color="success" onChange={hadleRadioPizza} />
          <p>Pizza</p>
        </div>
        <div className="radioProduct-produc">
          <Radio value="pasta" color="success" onChange={hadleRadioPasta} />
          <p>Pasta</p>
        </div>
        <div className="radioProduct-produc">
          <Radio
            value="ensalada"
            color="success"
            onChange={hadleRadioEnsalada}
          />
          <p>Ensalada</p>
        </div>
        <div className="radioProduct-produc">
          <Radio value="postre" color="success" onChange={hadleRadioPostre} />
          <p>Postre</p>
        </div>
        <div className="radioProduct-produc">
          <Radio value="bebida" color="success" onChange={hadleRadioBebida} />
          <p>Bebida</p>
        </div>
      </div> */}
      <Box sx={{ flexGrow: 1 }} paddingInline={10}>
        <Grid container spacing={0}>
          <Grid item size={2}>
            <Item sx={{ backgroundColor: "GrayText", color: "white" }}>
              Nombre
            </Item>
          </Grid>
          <Grid item size={3}>
            <Item sx={{ backgroundColor: "GrayText", color: "white" }}>
              Descripción
            </Item>
          </Grid>
          <Grid item size={3}>
            <Item sx={{ backgroundColor: "GrayText", color: "white" }}>
              Ingredientes
            </Item>
          </Grid>
          <Grid item size={1}>
            <Item sx={{ backgroundColor: "GrayText", color: "white" }}>
              Cat.
            </Item>
          </Grid>
          <Grid item size={1}>
            <Item sx={{ backgroundColor: "GrayText", color: "white" }}>
              Precio
            </Item>
          </Grid>
          <Grid item size={2}>
            <Item sx={{ backgroundColor: "GrayText", color: "white" }}>
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
                    <Item>{elem.title}</Item>
                  </Grid>
                  <Grid item size={3}>
                    <Item>{elem.description}</Item>
                  </Grid>
                  <Grid item size={3}>
                    <Item>{elem.ingredients}</Item>
                  </Grid>
                  <Grid item size={1}>
                    <Item>{elem.category}</Item>
                  </Grid>
                  <Grid item size={1}>
                    <Item>{elem.price}€</Item>
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
      {/* <Footer /> */}
    </div>
  );
};
