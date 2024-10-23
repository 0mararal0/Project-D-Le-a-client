import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Container,
  FormControl,
  Grid2,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Skeleton,
  styled,
  TextField,
} from "@mui/material";

import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import service from "../../services/config";
import axios from "axios";

export const EditUser = () => {
  const [profileUserData, setProfileUserData] = useState();
  const [name, setName] = useState(profileUserData?.firstName);
  const [lastName, setLastName] = useState(profileUserData?.lastName);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { loggedUserId } = useContext(AuthContext);

  //cloudinary
  const [imageUrl, setImageUrl] = useState(profileUserData?.photo);
  const [isUploading, setIsUploading] = useState(false); // for a loading animation effect

  // below function should be the only function invoked when the file type input changes => onChange={handleFileUpload}
  const handleFileUpload = async (event) => {
    console.log("The file to be uploaded is: ", event.target.files[0]);

    if (!event.target.files[0]) {
      // to prevent accidentally clicking the choose file button and not selecting a file
      return;
    }

    setIsUploading(true); // to start the loading animation

    const uploadData = new FormData(); // images and other files need to be sent to the backend in a FormData
    uploadData.append("image", event.target.files[0]);
    //                   |
    //     this name needs to match the name used in the middleware in the backend => uploader.single("image")

    try {
      const response = await service.post("/upload", uploadData);
      // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)

      setImageUrl(response.data.imageUrl);
      //                          |
      //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });

      setIsUploading(false); // to stop the loading animation
    } catch {
      navigate("/error");
    }
  };

  useEffect(() => {
    profileUser();
  }, []);

  const profileUser = async () => {
    try {
      const response = await service.get(`/user/profile/${loggedUserId}`);
      setProfileUserData(response.data);
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        navigate("/error");
      }
    }
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const editUser = {
        firstName: name,
        lastName: lastName,
        photo: imageUrl,
      };
      await service.put(`/user/profile/${loggedUserId}`, editUser);
      navigate("/");
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.message);
      } else {
        navigate("/error");
      }
    }
  };
  if (!profileUserData) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div>
      <div className="container-signup">
        <h4>Edita tu perfil</h4>
        <Container maxWidth="md">
          <Box component="form" onSubmit={handleSignup} autoComplete="nope">
            <CardMedia
              component="img"
              height="140"
              sx={{
                width: "140px",
                position: "relative",
                marginInline: "auto",
                top: "30px",
                borderRadius: "200px",
                border: "10px solid rgba(255, 255, 255, 0.702)",
                boxShadow: "0px 0px 10px #b8001f",
              }}
              image={imageUrl ? imageUrl : profileUserData.photo}
              alt="foto perfil"
            />
            <div className="input-signup">
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 4 }}>
                  <TextField
                    sx={{ paddingBlock: "10px", borderColor: "white" }}
                    fullWidth
                    name="no-autocomplete"
                    id="nombre"
                    label={profileUserData.firstName}
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
                    label={profileUserData.lastName}
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
                <Grid2 size={{ xs: 8 }}>
                  <TextField
                    disabled
                    sx={{ paddingBlock: "10px", borderColor: "white" }}
                    fullWidth
                    name="no-autocomplete"
                    id="email"
                    label={profileUserData.email}
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
                <Grid2 size={{ xs: 4 }}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    sx={{
                      met: 2,
                      borderRadius: "10px",
                      color: "black",
                      borderColor: "black",
                      backgroundColor: "transparent",
                      border: "2px solid rgba(255, 255, 255, 0.702)",
                      marginBlock: "15px",
                      display: "flex",
                      alignItems: "center",
                      boxShadow: "0px 0px 3px #b8001f",
                      "&:hover": {
                        boxShadow: "0px 0px 10px #b8001f",
                      },
                    }}
                  >
                    Sube tu foto
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleFileUpload}
                      disabled={isUploading}
                      multiple
                    />
                  </Button>
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
                Aceptar
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
                onClick={() => Navigate("/")}
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
