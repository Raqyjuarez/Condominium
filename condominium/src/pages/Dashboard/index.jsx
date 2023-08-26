import { Button, Grid } from "@mui/material";
import Greetings from "./Greetings";
import SlimCard from "./SlimCard";

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item container xs={12} spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Greetings user={"Josué Solís"} />
        </Grid>
        <Grid
          item
          container
          spacing={3}
          alignItems="stretch"
          xs={12}
          sm={12}
          md={12}
          lg={4}
        >
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <SlimCard type="value" value={123} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <SlimCard type="amount" value={321} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
