import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context.jsx";
import service from "../../services/config.js";
import "./style-Login.css";
import { Box, Button, Container, TextField } from "@mui/material";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };

  const validatePassword = (password) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/;
    return regexPassword.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email) && validatePassword(password)) {
      setError({
        error: true,
        message: "Credenciales incorrectas",
      });
    } else {
      try {
        const userCredentials = {
          email,
          password,
        };
        const response = await service.post("/auth/login", userCredentials);
        localStorage.setItem("authToken", response.data.authToken);
        await authenticateUser();
        navigate("/");
      } catch (error) {
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
    }
  };

  return (
    <div>
      <div className="container-login">
        <h4>Iniciar sesión</h4>
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
                InputLabelProps={{
                  sx: {
                    fontFamily: "Signika",
                  },
                }}
                inputProps={{
                  sx: {
                    fontFamily: "Signika",
                  },
                }}
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
                InputLabelProps={{
                  sx: {
                    fontFamily: "Signika",
                  },
                }}
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
                  fontFamily: "signika",
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
                  fontFamily: "signika",
                }}
                onClick={() => navigate("/")}
              >
                Cancelar
              </Button>
            </div>
          </Box>
        </Container>
      </div>
    </div>
  );
};
