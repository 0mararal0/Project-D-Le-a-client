import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import service from "../../services/config";

export const StatisticBarChartNoPadding = () => {
  const [amounts, setAmounts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    amount();
  }, []);
  const amount = async () => {
    try {
      const response = await service.get("/admin/order");
      const datos = response.data
        .sort((a, b) => new Date(b["updatedAt"]) - new Date(a["updatedAt"]))
        .slice(0, 6);

      setAmounts(datos);
      console.log(response.data);
    } catch {
      navigate("/error");
    }
  };

  if (amounts.length === 0) {
    console.log("entra");

    return <h3 style={{ color: "white" }}>loading...</h3>;
  }
  console.log(amounts);

  const data = [
    {
      name: amounts[0] ? amounts[0]._id.slice(-5) : " ",
      Euros: amounts[0] ? amounts[0].totalAmount : 0,
    },
    {
      name: amounts[1] ? amounts[1]._id.slice(-5) : " ",
      Euros: amounts[1] ? amounts[1].totalAmount : 0,
    },
    {
      name: amounts[2] ? amounts[2]._id.slice(-5) : " ",
      Euros: amounts[2] ? amounts[2].totalAmount : 0,
    },
    {
      name: amounts[3] ? amounts[3]._id.slice(-5) : " ",
      Euros: amounts[3] ? amounts[3].totalAmount : 0,
    },
    {
      name: amounts[4] ? amounts[4]._id.slice(-5) : " ",
      Euros: amounts[4] ? amounts[4].totalAmount : 0,
    },
    {
      name: amounts[5] ? amounts[5]._id.slice(-5) : " ",
      Euros: amounts[5] ? amounts[5].totalAmount : 0,
    },
  ];

  return (
    <div
      style={{
        border: "2px solid white",
        width: "500px",
        borderRadius: "50px",
        height: "480px",
        paddingTop: "80px",
      }}
    >
      <p
        style={{
          fontSize: "2rem",
          fontFamily: "logofont",
          display: "flex",

          position: "relative",
          top: "-30px",
          justifyContent: "center",
          width: "100%",
          color: "white",
        }}
      >
        Pedidos
      </p>

      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis
          dataKey="name"
          scale="point"
          padding={{ left: 10, right: 10 }}
          tick={{ fill: "white" }}
        />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="Euros"
          fill="#b8001f"
          background={{ fill: "rgba(128, 128, 128, 0.385)" }}
        />
      </BarChart>
    </div>
  );
};
