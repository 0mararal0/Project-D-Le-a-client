import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";

function PrivateAdmin(props) {
  const { isLoggedIn, isAdmin } = useContext(AuthContext);

  if (isLoggedIn && isAdmin) {
    return props.children; // adelante, bienvenido a está página privada
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default PrivateAdmin;
