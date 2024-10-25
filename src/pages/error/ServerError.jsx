import { Link } from "react-router-dom";
import "./style-ServerError.css";

export const ServerError = () => {
  return (
    <div className="container-serverError">
      <h4>500</h4>
      <h6>Server Error</h6>
      <p>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          Ir a Home
        </Link>
      </p>
    </div>
  );
};
