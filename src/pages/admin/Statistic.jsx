import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { StatisticPieChart } from "../../components/statisticComponent/StatisticPieChart";
import { StatisticBarChartNoPadding } from "../../components/statisticComponent/StatisticBarChartNoPadding";
import "./style-Statistic.css";

export const Statistic = () => {
  return (
    <div className="container-statistic">
      <h4>Estadísticas</h4>
      <Box>
        <Grid container spacing={5}>
          <Grid
            size={{ lg: 6, xs: 12 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <StatisticPieChart />
          </Grid>
          <Grid
            size={{ lg: 6, xs: 12 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <StatisticBarChartNoPadding />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
