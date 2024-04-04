import { Grid, Stack, Typography } from "@mui/material";
import { TopQuery } from "./TopQuery";

const queryChecker = (query): string | any => {
  if (query === "airing") {
    return (
      <Typography variant="h5" style={{ fontWeight: 600 }}>
        Top Airing
      </Typography>
    );
  } else if (query === "upcoming") {
    return (
      <Typography variant="h5" style={{ fontWeight: 600 }}>
        Most Popular
      </Typography>
    );
  } else if (query === "bypopularity") {
    return (
      <Typography variant="h5" style={{ fontWeight: 600 }}>
        Most Favorite
      </Typography>
    );
  } else {
    return (
      <Typography variant="h5" style={{ fontWeight: 600 }}>
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
        <Grid item xs={6} md={3} px={6} key={crypto.randomUUID()}>
          <Stack gap={2} direction={"column"} key={crypto.randomUUID()}>
            {queryChecker(type)}
            <TopQuery query={type} />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
