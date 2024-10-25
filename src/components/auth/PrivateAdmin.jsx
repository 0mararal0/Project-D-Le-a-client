import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

function PrivateAdmin(props) {
  const { isLoggedIn, isAdmin } = useContext(AuthContext);

  if (isLoggedIn && isAdmin) {
    return props.children;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default PrivateAdmin;
