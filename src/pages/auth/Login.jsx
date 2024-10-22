import service from "../../services/config.js";

import { AuthContext } from "../../context/auth.context.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import "./style-Login.css";
import { Footer } from "../../components/footer/Footer.jsx";
import { ButtonComponent } from "../../components/button/ButtonComponent.jsx";

export const Login = () => {
  const navigate = useNavigate();
  const { authenticateUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState({
    error: false,

    message: "",
  });

  const validateEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };
  const validatePassword = (password) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;
    return regexPassword.test(password);
  };

  /*  const handleLogin = async (e) => {
    e.preventDefault();
    // ... contactar al backend para validar credenciales de usuario aqui
    try {
      const userCredentials = {
        email,
        password,
      };

      // const response = await axios.post("http://localhost:5005/api/auth/login", userCredentials)
      const response = await service.post("/auth/login", userCredentials);

      console.log(response);

      localStorage.setItem("authToken", response.data.authToken);

      await authenticateUser();

      navigate("/private-page-example");
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        //! aqui deberia haber redirección a /error
      }
    }
  }; */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email) && validatePassword(password)) {
      setError({
        error: true,
        message: "Formato de email incorrecto",
      });
    } else {
      try {
        const userCredentials = {
          email,
          password,
        };

        // const response = await axios.post("http://localhost:5005/api/auth/login", userCredentials)
        const response = await service.post("/auth/login", userCredentials);

        console.log(response);

        localStorage.setItem("authToken", response.data.authToken);

        await authenticateUser();

        navigate("/");
      } catch (error) {
        console.log(error);
        if (error.response.status === 400) {
          setErrorMessage(error.response.data.message);
        } else {
          navigate("/error");
        }
      }
      setError({
        error: false,
        message: "",
      });
      console.log(email);
    }
  };

  return (
    <div>
      <div className="container-login">
        <h4>Iniciar sesión</h4>
        {/*  <form onSubmit={handleLogin}>
          {/*  <label>Correo Electronico:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
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
          <button type="submit">Acceder</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form> */}
        <Container maxWidth="md">
          <Box component="form" onSubmit={handleSubmit}>
            <div className="input-login">
              <TextField
                autoComplete="off"
                sx={{ paddingBlock: "10px", borderColor: "white" }}
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                helperText={error.message}
                error={error.error}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                sx={{ paddingBlock: "10px", borderColor: "white" }}
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                helperText={error.message}
                error={error.error}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p style={{ color: "red" }}>{errorMessage}</p>
              <p className="linkRegister-login">
                Si aún no estás registrado,{" "}
                <Link to={"/signup"}>Regístrate aqui.</Link>
              </p>

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
                Entrar
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
