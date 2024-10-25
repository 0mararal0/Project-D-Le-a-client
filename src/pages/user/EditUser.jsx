import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import service from "../../services/config";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid2,
  styled,
  TextField,
} from "@mui/material";
import ClockLoader from "react-spinners/ClockLoader";

export const EditUser = () => {
  const [profileUserData, setProfileUserData] = useState();
  const [name, setName] = useState(profileUserData?.firstName);
  const [lastName, setLastName] = useState(profileUserData?.lastName);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(profileUserData?.photo);
  const navigate = useNavigate();
  const { loggedUserId, setPhotoProfile } = useContext(AuthContext);

  const handleFileUpload = async (event) => {
    console.log("The file to be uploaded is: ", event.target.files[0]);
    if (!event.target.files[0]) {
      return;
    }
    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append("image", event.target.files[0]);
    try {
      const response = await service.post("/upload", uploadData);
      setImageUrl(response.data.imageUrl);
      setIsUploading(false);
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
      const response = await service.put(
        `/user/profile/${loggedUserId}`,
        editUser
      );
      setPhotoProfile(response.data.photo);
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
    return <ClockLoader size={200} />;
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
                      sx: {
                        fontFamily: "Signika",
                      },
                    }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 8 }}>
                  <TextField
                    sx={{
                      paddingBlock: "10px",
                      borderColor: "white",
                      fontFamily: "signika",
                    }}
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
                      sx: {
                        fontFamily: "Signika",
                      },
                    }}
                  />
                </Grid2>
                <Grid2 size={{ xs: 8 }}>
                  <TextField
                    disabled
                    sx={{
                      paddingBlock: "10px",
                      borderColor: "white",
                      fontFamily: "signika",
                    }}
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
                      fontFamily: "signika",
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
                  fontFamily: "signika",
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
