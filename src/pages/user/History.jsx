import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { AuthContext } from "../../context/auth.context";
import service from "../../services/config";
import "./style-History.css";

export const History = () => {
  const [ordesData, setOrdesData] = useState();
  const navigate = useNavigate();
  const { loggedUserId } = useContext(AuthContext);

  useEffect(() => {
    ordes();
  }, []);

  const ordes = async () => {
    try {
      const response = await service.get(`/user/order/${loggedUserId}`);
      setOrdesData(response.data);
    } catch {
      navigate("/error");
    }
  };

  if (!ordesData) {
    return <h3>loading...</h3>;
  }
  console.log(ordesData);

  return (
    <div className="container-history">
      <h4>Historial de pedidos</h4>
      <div className="container-ordes">
        {ordesData.map((elem) => {
          return (
            <div key={elem._id} className="order-history">
              <h4>Pedido: {elem._id}</h4>
              <h6>Descripcción:</h6>
              {elem.product &&
                elem.product.map((product, index) => {
                  return (
                    <div key={index} className="product-history">
                      <p>- {product.title}</p>
                      <p>{product.price}€</p>
                    </div>
                  );
                })}
              <h5>Total: {elem.totalAmount}€</h5>
              <h6>Dirección</h6>

              <div className="address-history">
                <p>
                  {elem.address} {elem.floor} {elem.letter}
                </p>
                <p>
                  {elem.city} {elem.province}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
