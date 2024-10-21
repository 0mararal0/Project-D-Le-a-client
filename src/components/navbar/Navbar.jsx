import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { AddProductContext } from "../../context/addproduct.context";
import { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../../assets/images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import "./style-Navbar.css";

const pages = ["Haz tu pedido", "Sobre Nosotros", "Contacto"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [settings, setSettings] = useState([]);

  const { count } = useContext(AddProductContext);
  console.log("navbar", count);

  const navigate = useNavigate();
  /* const productString = localStorage.getItem("order");
  useEffect(() => {
    if (productString) {
      const product = JSON.parse(productString);
      setValueProduct(product.length);
    }
  }, [productString]); */

  const { isLoggedIn, authenticateUser, isAdmin } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("authToken"); // removemos el token

      await authenticateUser(); // validat el token, la funcion cambia los estados

      navigate("/"); // navegamos a cualquier página pública
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    /* if (e === "Sobre Nosotros") {
      navigate("/about");
    }
    if (e === "Contacto") {
      navigate("/contact");
    }
    if (e === "Haz tu pedido") {
      navigate("/order");
    } */

    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // const settings = ["Profile", "Account", "Dashboard", "Logout"];

  /*  if (!isLoggedIn) {
    setSettings([
      { name: "Login", dir: "/login" },
      { name: "Regístrate", dir: "/signup" },
    ]);
  } */
  return (
    <>
      {/* <nav>
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/signup">Registro</Link>}
        {!isLoggedIn && <Link to="/login">Acceso</Link>}
        {isLoggedIn && <Link to="/private-page-example">Ejemplo Privado</Link>}
        {isLoggedIn && <Link onClick={handleLogout}>Cerrar sesión</Link>}
        {isLoggedIn && isAdmin && <span>usuario admin</span>}
        {isLoggedIn && !isAdmin && <span>usuario normal</span>}
      </nav> */}
      <Container
        sx={{ position: "fixed", top: 20, left: 0, right: 0 }}
        /* className="container-navBar" */
      >
        <AppBar
          position="static"
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Link to={"/"}>
                <Avatar
                  src={Logo}
                  sx={{ display: { xs: "none", md: "flex" } }}
                  style={{ height: "80px", width: "80px" }}
                />
              </Link>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {/*  {pages.map((page) => ( */}

                  <MenuItem onClick={handleCloseNavMenu}>
                    {" "}
                    <Typography sx={{ textAlign: "center" }}>
                      {" "}
                      <Link
                        to={"/order"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Haz tu pedido{" "}
                      </Link>
                    </Typography>{" "}
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    {" "}
                    <Typography sx={{ textAlign: "center" }}>
                      {" "}
                      <Link
                        to={"/about"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Sobre Nosotros{" "}
                      </Link>
                    </Typography>{" "}
                  </MenuItem>

                  <MenuItem onClick={handleCloseNavMenu}>
                    {" "}
                    <Typography sx={{ textAlign: "center" }}>
                      {" "}
                      <Link
                        to={"/contact"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Contacto{" "}
                      </Link>
                    </Typography>{" "}
                  </MenuItem>

                  {isLoggedIn && isAdmin && (
                    <MenuItem onClick={handleCloseNavMenu}>
                      {" "}
                      <Typography sx={{ textAlign: "center" }}>
                        {" "}
                        <Link
                          to={"/admin/home"}
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Panel Administrador{" "}
                        </Link>
                      </Typography>{" "}
                    </MenuItem>
                  )}
                </Menu>
              </Box>

              <Typography
                variant="h3"
                noWrap
                component="a"
                style={{ fontFamily: "logofont", fontWeight: "lighter" }}
                sx={{
                  mr: 2,
                  display: { sm: "flex", md: "none", xs: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {" "}
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  D-Leña{" "}
                </Link>
              </Typography>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                style={{ fontFamily: "logofont", fontWeight: "lighter" }}
                sx={{
                  mr: 2,
                  display: { xs: "flex", sm: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                D-Leña
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {/*  {pages.map((page) => ( */}

                <Button
                  onClick={() => handleCloseNavMenu()}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    to={"/order"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Haz tu pedido
                  </Link>
                </Button>

                <Button
                  onClick={() => handleCloseNavMenu()}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    to={"/about"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Sobre Nosotros
                  </Link>
                </Button>

                <Button
                  onClick={() => handleCloseNavMenu()}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    to={"/contact"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Contacto
                  </Link>
                </Button>

                {isLoggedIn && isAdmin && (
                  <Button
                    onClick={() => handleCloseNavMenu()}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Link
                      to={"/admin/home"}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Panel Administrador
                    </Link>
                  </Button>
                )}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, mr: "30px" }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {/*  {settings.map((setting) => (
                    <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        {setting.name}
                      </Typography>
                    </MenuItem>
                  ))} */}
                  {!isLoggedIn && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/login"
                      >
                        <Typography sx={{ textAlign: "center" }}>
                          Login
                        </Typography>
                      </Link>
                    </MenuItem>
                  )}
                  {!isLoggedIn && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/signup"
                      >
                        <Typography sx={{ textAlign: "center" }}>
                          Registro
                        </Typography>
                      </Link>
                    </MenuItem>
                  )}
                  {isLoggedIn && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/user/profile"
                      >
                        <Typography sx={{ textAlign: "center" }}>
                          Perfil
                        </Typography>
                      </Link>
                    </MenuItem>
                  )}
                  {isLoggedIn && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/user/history"
                      >
                        <Typography sx={{ textAlign: "center" }}>
                          Historial
                        </Typography>
                      </Link>
                    </MenuItem>
                  )}
                  {isLoggedIn && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/user/sumary"
                      >
                        <Typography sx={{ textAlign: "center" }}>
                          Pedido
                        </Typography>
                      </Link>
                    </MenuItem>
                  )}
                  {isLoggedIn && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        onClick={handleLogout}
                      >
                        <Typography sx={{ textAlign: "center" }}>
                          LogOut
                        </Typography>
                      </Link>
                    </MenuItem>
                  )}

                  {/* {isLoggedIn && (
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/signup"
                      >
                        <Typography sx={{ textAlign: "center" }}>
                          Perfil
                        </Typography>
                      </Link>
                    )} */}
                </Menu>
              </Box>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={count} color="secondary">
                  <ShoppingCartIcon style={{ color: "white" }} />
                </StyledBadge>
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Container>
    </>
  );
};
