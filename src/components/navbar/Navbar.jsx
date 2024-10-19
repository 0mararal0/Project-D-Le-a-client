import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { useContext, useState } from "react";
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
  const navigate = useNavigate();
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
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/signup">Registro</Link>}
        {!isLoggedIn && <Link to="/login">Acceso</Link>}
        {isLoggedIn && <Link to="/private-page-example">Ejemplo Privado</Link>}
        {isLoggedIn && <Link onClick={handleLogout}>Cerrar sesión</Link>}
        {isLoggedIn && isAdmin && <span>usuario admin</span>}
        {isLoggedIn && !isAdmin && <span>usuario normal</span>}
      </nav>
      <Container
        sx={{ position: "fixed", top: 20, left: 0, right: 0 }}
        /* className="container-navBar" */
      >
        <AppBar
          position="static"
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h3"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
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
                D-Leña
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
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={1} color="secondary">
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
