import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/config";
import { PieChart, Pie, Cell } from "recharts";

export const StatisticPieChart = () => {
  const [dataUser, setDataUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    users();
  }, []);

  const users = async () => {
    try {
      const response = await service.get("/admin/user");
      const result = response.data.reduce((acc, objeto) => {
        const clave = objeto["role"];
        if (!acc[clave]) {
          acc[clave] = 0;
        }
        acc[clave]++;
        return acc;
      }, {});
      setDataUser(result);
    } catch {
      navigate("/error");
    }
  };

  const data = [
    { name: "Group A", value: dataUser?.user },
    { name: "Group B", value: dataUser?.admin },
  ];
  const COLORS = ["#0088FE", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div
      style={{
        border: "2px solid white",
        width: "400px",
        borderRadius: "50px",
      }}
    >
      <p
        style={{
          fontSize: "2rem",
          fontFamily: "logofont",
          display: "flex",

          position: "relative",
          top: "50px",
          justifyContent: "center",
          width: "100%",
          color: "white",
        }}
      >
        Roles
      </p>
      <p
        style={{
          fontSize: "1rem",
          fontFamily: "signika",
          display: "flex",
          position: "relative",
          top: "80px",
          justifyContent: "center",
          width: "100%",
          color: "white",
        }}
      >
        Usuarios totales: {dataUser?.admin + dataUser?.user}
      </p>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div
        style={{
          display: "flex",
          gap: "10px",
          position: "relative",
          bottom: "50px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <p
          style={{ width: "15px", height: "15px", backgroundColor: "#0088FE" }}
        />
        <p style={{ color: "white", fontFamily: "signika" }}>Usiarios</p>
        <p
          style={{ width: "15px", height: "15px", backgroundColor: "#FF8042" }}
        />
        <p style={{ color: "white", fontFamily: "signika" }}>Administradores</p>
      </div>
    </div>
  );
};
