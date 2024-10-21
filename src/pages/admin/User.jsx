import { useEffect, useState } from "react";
import "./style-user.css";
import { Footer } from "../../components/footer/Footer";
import { Box, Paper, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import service from "../../services/config";

export const User = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    users();
  }, []);
  const users = async () => {
    try {
      const response = await service.get("/admin/user");
      setDataUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleBlock = async (id) => {
    console.log(id);
    const data = { isDeleted: true };

    try {
      const response = await service.put(`/admin/user/${id}`, data);
      console.log(response);
      users();
    } catch (error) {
      console.log(error);
    }
  };
  const handleUnlock = async (id) => {
    console.log(id);
    const data = { isDeleted: false };

    try {
      const response = await service.put(`/admin/user/${id}`, data);
      console.log(response);
      users();
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

  return (
    <div>
      <div className="container-user">
        <h4>Usuarios</h4>
        <Box sx={{ flexGrow: 1 }} paddingInline={10}>
          <Grid container spacing={0}>
            <Grid item size={2}>
              <Item>Nombre</Item>
            </Grid>
            <Grid item size={2}>
              <Item>Apellidos</Item>
            </Grid>
            <Grid item size={3}>
              <Item>Email</Item>
            </Grid>
            <Grid item size={1}>
              <Item>Teléfono</Item>
            </Grid>
            <Grid item size={2}>
              <Item>Creado</Item>
            </Grid>
            <Grid item size={2}>
              <Item>Estado</Item>
            </Grid>
          </Grid>
        </Box>
        {dataUsers &&
          dataUsers.map((elem) => {
            return (
              <Box
                key={elem._id}
                sx={{ flexGrow: 1 }}
                marginBlock={0.5}
                paddingInline={10}
              >
                <Grid container spacing={0}>
                  <Grid item size={2}>
                    <Item>{elem.firstName}</Item>
                  </Grid>
                  <Grid item size={2}>
                    <Item>{elem.lastname}</Item>
                  </Grid>
                  <Grid item size={3}>
                    <Item>{elem.email}</Item>
                  </Grid>
                  <Grid item size={1}>
                    <Item>{elem.phone}</Item>
                  </Grid>
                  <Grid item size={2}>
                    <Item>{elem.createdAt}</Item>
                  </Grid>
                  <Grid item size={2}>
                    {elem.isDeleted ? (
                      <Item sx={{ backgroundColor: "red" }}>
                        <button
                          className="button-users"
                          onClick={() => handleUnlock(elem._id)}
                        >
                          Desbloquear
                        </button>
                      </Item>
                    ) : (
                      <Item sx={{ backgroundColor: "green" }}>
                        <button
                          className="button-users"
                          onClick={() => handleBlock(elem._id)}
                        >
                          Bloquear
                        </button>
                      </Item>
                    )}
                  </Grid>
                </Grid>
              </Box>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};
