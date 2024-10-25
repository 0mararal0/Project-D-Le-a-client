import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/config";
import "./style-user.css";
import { Box, Checkbox, Paper, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const User = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    users();
  }, []);

  const users = async () => {
    try {
      const response = await service.get("/admin/user");
      setDataUsers(response.data);
    } catch {
      navigate("/error");
    }
  };

  const formatDate = (elem) => {
    const fecha = new Date(elem);
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const año = String(fecha.getFullYear());
    return `${dia}/${mes}/${año}`;
  };

  const handleBlock = async (id) => {
    const data = { isDeleted: true };
    try {
      await service.put(`/admin/user/${id}`, data);
      users();
    } catch {
      navigate("/error");
    }
  };

  const handleUnlock = async (id) => {
    const data = { isDeleted: false };
    try {
      await service.put(`/admin/user/${id}`, data);
      users();
    } catch {
      navigate("/error");
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
    if (e.target.checked) {
      const data = { role: "admin" };
      try {
        await service.put(`/admin/user/${id}`, data);
        users();
      } catch {
        navigate("/error");
      }
    } else {
      const data = { role: "user" };
      try {
        await service.put(`/admin/user/${id}`, data);
        users();
      } catch {
        navigate("/error");
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
                  fontFamily: "signika",
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
                  fontFamily: "signika",
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
                  fontFamily: "signika",
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
                  fontFamily: "signika",
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
                  fontFamily: "signika",
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
                  fontFamily: "signika",
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
                  fontFamily: "signika",
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
                        fontFamily: "signika",
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
                        fontFamily: "signika",
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
                        fontFamily: "signika",
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
                        fontFamily: "signika",
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
                        fontFamily: "signika",
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
                          fontFamily: "signika",
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
                          fontFamily: "signika",
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
