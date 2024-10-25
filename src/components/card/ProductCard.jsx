import { forwardRef, useContext, useState } from "react";
import { AddProductContext } from "../../context/addproduct.context";
import "./style-ProductCard.css";
import { unstable_useNumberInput as useNumberInput } from "@mui/base/unstable_useNumberInput";
import { styled } from "@mui/system";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";

const CompactNumberInput = forwardRef(function CompactNumberInput(props, ref) {
  const {
    getRootProps,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput(props);

  const inputProps = getInputProps();

  inputProps.ref = useForkRef(inputProps.ref, ref);

  return (
    <StyledInputRoot {...getRootProps()}>
      <StyledStepperButton className="increment" {...getIncrementButtonProps()}>
        <ArrowDropUpRoundedIcon />
      </StyledStepperButton>
      <StyledStepperButton className="decrement" {...getDecrementButtonProps()}>
        <ArrowDropDownRoundedIcon />
      </StyledStepperButton>
      <HiddenInput {...inputProps} />
    </StyledInputRoot>
  );
});

export const ProductCard = ({ title, ingredients, price, id }) => {
  const [value, setValue] = useState(1);
  const { updateContext } = useContext(AddProductContext);

  const handleAdd = () => {
    if (localStorage.getItem("order")) {
      const retrievedOrderString = localStorage.getItem("order");
      const retrievedOrder = JSON.parse(retrievedOrderString);
      const order = {
        title,
        price,
        quantity: value,
        id,
      };

      const addOrder = [...retrievedOrder, order];

      const orderDisplayed = addOrder.reduce((acc, elem) => {
        for (let i = 0; i < elem.quantity; i++) {
          acc.push({ ...elem, quantity: 1, idOrder: uuidv4() });
        }
        return acc;
      }, []);

      const addOrderString = JSON.stringify(orderDisplayed);
      localStorage.setItem("order", [addOrderString]);
    } else {
      const order = [
        {
          title,
          price,
          quantity: value,
          id,
        },
      ];
      const orderDisplayed = order.reduce((acc, elem) => {
        for (let i = 0; i < elem.quantity; i++) {
          acc.push({ ...elem, quantity: 1, idOrder: uuidv4() });
        }
        return acc;
      }, []);

      const orderString = JSON.stringify(orderDisplayed);
      localStorage.setItem("order", [orderString]);
    }
    updateContext();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        className="container-productCard"
        container
        spacing={{ xs: 1, md: 0 }}
      >
        <Grid className="text-productCard" size={{ xs: 12, md: 7 }}>
          <div className="price-productCard">
            <h4>{title}</h4>
            <p>{price}€</p>
          </div>
          <p>{ingredients}</p>
        </Grid>
        <Grid
          size={{ xs: 12, md: 5 }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          <Layout>
            <CompactNumberInput
              aria-label="Compact number input"
              placeholder="Type a number…"
              readOnly
              value={value}
              onChange={(event, val) => setValue(val)}
              min={1}
              max={5}
            />
            {/* <Pre style={{ color: "white" }}>Current value: {value ?? " "}</Pre> */}
            <p className="count-productCard">{value ?? "1 "}</p>
          </Layout>

          <Button
            variant="outlined"
            className="button-productCard"
            onClick={handleAdd}
          >
            Añadir
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const blue = {
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#B8001F",
  600: "#6B7A90",
  700: "#B8001F",
  /* 
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#1C2025", */
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledInputRoot = styled("div")(
  ({ theme }) => `
    display: grid;
    grid-template-columns: 1.5rem;
    grid-template-rows: 1.5rem 1.5rem;
    grid-template-areas:
      "increment"
      "decrement";
    row-gap: 0.5px;
    overflow: auto;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    border-color: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
    };
  `
);

const HiddenInput = styled("input")`
  visibility: hidden;
  position: absolute;
`;

const StyledStepperButton = styled("button")(
  ({ theme }) => `
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  box-sizing: border-box;
  border: 0;
  padding: 0;
  color: inherit;
  background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === "dark" ? blue[700] : blue[500]};
    color: ${grey[50]};
  }
  &:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[700] : blue[200]};
  }
  &.increment {
    grid-area: increment;
  }
  &.decrement {
    grid-area: decrement;
  }
`
);

const Layout = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  column-gap: 1rem;
`;
