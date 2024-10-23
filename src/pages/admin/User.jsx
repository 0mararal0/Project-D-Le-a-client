import { useEffect, useState } from "react";
import "./style-user.css";
import { Footer } from "../../components/footer/Footer";
import { Box, Checkbox, Paper, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import service from "../../services/config";

export const User = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [newDate, setNewDate] = useState();

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
  console.log(dataUsers);

  const formatDate = (elem) => {
    const fecha = new Date(elem);

    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const año = String(fecha.getFullYear());

    return `${dia}/${mes}/${año}`;
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

  const handleAdmin = async (id, e) => {
    console.log(id);
    if (e.target.checked) {
      const data = { role: "admin" };

      try {
        const response = await service.put(`/admin/user/${id}`, data);
        console.log(response);
        users();
      } catch (error) {
        console.log(error);
      }
    } else {
      const data = { role: "user" };

      try {
        const response = await service.put(`/admin/user/${id}`, data);
        console.log(response);
        users();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="container-user">
        <h4>Usuarios</h4>
        <Box sx={{ flexGrow: 1 }} paddingInline={10}>
          <Grid container spacing={0}>
            <Grid item size={2}>
              <Item
                sx={{
                  backgroundColor: "GrayText",
                  color: "white",
                }}
              >
                Nombre
              </Item>
            </Grid>
            <Grid item size={2}>
              <Item
                sx={{
                  backgroundColor: "GrayText",
                  color: "white",
                }}
              >
                Apellidos
              </Item>
            </Grid>
            <Grid item size={2}>
              <Item
                sx={{
                  backgroundColor: "GrayText",
                  color: "white",
                }}
              >
                Email
              </Item>
            </Grid>
            <Grid item size={1}>
              <Item
                sx={{
                  backgroundColor: "GrayText",
                  color: "white",
                }}
              >
                Teléfono
              </Item>
            </Grid>
            <Grid item size={2}>
              <Item
                sx={{
                  backgroundColor: "GrayText",
                  color: "white",
                }}
              >
                Creado
              </Item>
            </Grid>
            <Grid item size={2}>
              <Item
                sx={{
                  backgroundColor: "GrayText",
                  color: "white",
                }}
              >
                Estado
              </Item>
            </Grid>
            <Grid item size={1}>
              <Item
                sx={{
                  backgroundColor: "GrayText",
                  color: "white",
                }}
              >
                admin
              </Item>
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
                    <Item
                      sx={{
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {elem.firstName}
                    </Item>
                  </Grid>
                  <Grid item size={2}>
                    <Item
                      sx={{
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {elem.lastname}
                    </Item>
                  </Grid>
                  <Grid item size={2}>
                    <Item
                      sx={{
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {elem.email}
                    </Item>
                  </Grid>
                  <Grid item size={1}>
                    <Item
                      sx={{
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {elem.phone}
                    </Item>
                  </Grid>
                  <Grid item size={2}>
                    <Item
                      sx={{
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {formatDate(elem.createdAt)}
                    </Item>
                  </Grid>
                  <Grid item size={2}>
                    {elem.isDeleted ? (
                      <Item
                        sx={{
                          backgroundColor: "red",
                          height: "50px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          className="button-users"
                          onClick={() => handleUnlock(elem._id)}
                        >
                          Desbloq.
                        </button>
                      </Item>
                    ) : (
                      <Item
                        sx={{
                          backgroundColor: "green",
                          height: "50px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          className="button-users"
                          onClick={() => handleBlock(elem._id)}
                        >
                          Bloquear
                        </button>
                      </Item>
                    )}
                  </Grid>
                  <Grid item size={1}>
                    <Item sx={{ height: "50px" }}>
                      {elem.role === "admin" ? (
                        <Checkbox
                          defaultChecked
                          onChange={(e) => handleAdmin(elem._id, e)}
                        />
                      ) : (
                        <Checkbox onChange={(e) => handleAdmin(elem._id, e)} />
                      )}
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
      </div>
    </div>
  );
};
