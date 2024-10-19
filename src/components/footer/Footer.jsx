import React, { useState } from "react";
import "./style-Footer.css";
import fondoFooter from "../../assets/images/imgFooter.jpg";
/*import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Paper } from "@mui/material"; */

export const Footer = () => {
  /* const [value, setValue] = useState(0); */
  return (
    <footer className="container-footer">
      <h5 style={{ color: "white" }}>D-Leña</h5>
      <h6>By Alberto Marcos</h6>
      <img src={fondoFooter} alt="" />

      <p>@Todos los derechos reservados</p>

      {/*  <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
              <BottomNavigationAction
                label="Favorites"
                icon={<FavoriteIcon />}
              />
              <BottomNavigationAction
                label="Nearby"
                icon={<LocationOnIcon />}
              />
            </BottomNavigation>
          </Paper>
        </BottomNavigation>
      </Box> */}
    </footer>
  );
};
