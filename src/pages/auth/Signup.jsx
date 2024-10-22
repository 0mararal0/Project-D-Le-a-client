import { useState } from "react";
import "./style-Signup.css";
import service from "../../services/config";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid2,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Footer } from "../../components/footer/Footer";

export const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword2 = (event) => {
    event.preventDefault();
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    // ... contactar al backend para registrar al usuario aqui
    try {
      const newUser = {
        firstName: name,
        lastName,
        email,
        password,
      };
      const response = await service.post("/auth/signup", newUser);

      console.log(response);

      // await axios.post("http://localhost:5005/api/auth/signup", newUser)

      navigate("/login");
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        //! aqui deberia haber redirección a /error
      }
    }
  };

  return (
    <div>
      <div className="container-signup">
        <h4>Crea tu cuenta</h4>
        {/* <form onSubmit={handleSignup}>
          <label>Correo Electronico:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <br />
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <button type="submit">Registrar</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form> */}
        <Container maxWidth="md">
          <Box component="form" onSubmit={handleSignup} autoComplete="nope">
            <div className="input-signup">
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 4 }}>
                  <TextField
                    sx={{ paddingBlock: "10px", borderColor: "white" }}
                    fullWidth
                    name="no-autocomplete"
                    id="nombre"
                    label="Nombre"
                    type="text"
                    autoComplete="new-password"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    inputProps={{
                      autoComplete: "new-password",
                    }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 8 }}>
                  <TextField
                    sx={{ paddingBlock: "10px", borderColor: "white" }}
                    fullWidth
                    name="no-autocomplete"
                    id="Apellidos"
                    label="Apellidos"
                    type="text"
                    autoComplete="new-password"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    inputProps={{
                      autoComplete: "new-password",
                    }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12 }}>
                  <TextField
                    sx={{ paddingBlock: "10px", borderColor: "white" }}
                    fullWidth
                    name="no-autocomplete"
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="new-password"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    inputProps={{
                      autoComplete: "new-password",
                    }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    sx={{ paddingBlock: "10px", borderColor: "white" }}
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Contraseña
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Contraseña"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </FormControl>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    sx={{ paddingBlock: "10px", borderColor: "white" }}
                  >
                    <InputLabel htmlFor="outlined-adornment-password2">
                      Repite Contraseña
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password2"
                      type={showPassword2 ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword2}
                            onMouseDown={handleMouseDownPassword2}
                            onMouseUp={handleMouseUpPassword2}
                            edge="end"
                          >
                            {showPassword2 ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Repite Contraseña "
                      onChange={(e) => setPassword2(e.target.value)}
                      value={password2}
                    />
                  </FormControl>
                </Grid2>
              </Grid2>
              <p style={{ color: "red" }}>{errorMessage}</p>

              <Button
                type="submit"
                variant="outlined"
                sx={{
                  met: 2,
                  borderRadius: "10px",
                  color: "black",
                  borderColor: "black",
                }}
              >
                Registrar
              </Button>
              <Button
                type="button"
                variant="outlined"
                sx={{
                  met: 2,
                  borderRadius: "10px",
                  color: "black",
                  borderColor: "black",
                  margin: "10px",
                }}
                onClick={() => navigate("/")}
              >
                Cancelar
              </Button>
            </div>
          </Box>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
