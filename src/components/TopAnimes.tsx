import { Grid, Stack, Typography } from "@mui/material";
import { TopQuery } from "./TopQuery";

const queryChecker = (query): string | any => {
  if (query === "airing") {
    return (
      <Typography variant="h5" style={{ fontWeight: 600, color: "#dda15e" }}>
        Top Airing
      </Typography>
    );
  } else if (query === "upcoming") {
    return (
      <Typography variant="h5" style={{ fontWeight: 600 , color: "#dda15e"}}>
        Most Popular
      </Typography>
    );
  } else if (query === "bypopularity") {
    return (
      <Typography variant="h5" style={{ fontWeight: 600, color: "#dda15e" }}>
        Most Favorite
      </Typography>
    );
  } else {
    return (
      <Typography variant="h5" style={{ fontWeight: 600, color: "#dda15e" }}>
        Last Completed
      </Typography>
    );
  }
};

export const TopAnimes = () => {
  const topAnimeTypes = ["airing", "upcoming", "bypopularity", "favorite"];

  return (
    <Grid container>
      {topAnimeTypes.map((type) => (
        <Grid item xs={6} md={3} px={2} key={crypto.randomUUID()}>
          <Stack gap={2} direction={"column"} key={crypto.randomUUID()}>
            {queryChecker(type)}
            <TopQuery query={type} />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
