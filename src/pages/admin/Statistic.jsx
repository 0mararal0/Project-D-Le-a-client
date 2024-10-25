import "./style-Statistic.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { StatisticPieChart } from "../../components/statisticComponent/StatisticPieChart";
import { StatisticBarChartNoPadding } from "../../components/statisticComponent/StatisticBarChartNoPadding";

export const Statistic = () => {
  return (
    <div className="container-statistic">
      <h4>Estadísticas</h4>
      <Box>
        <Grid container spacing={5}>
          <Grid
            size={{ lg: 6, xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "end" },
            }}
          >
            <StatisticPieChart />
          </Grid>
          <Grid
            size={{ lg: 6, xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "start" },
            }}
          >
            <StatisticBarChartNoPadding />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
