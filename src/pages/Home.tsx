import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { TopAnimes } from "../components/TopAnimes";
import { TopCharacters } from "../components/TopCharacters";
import { HeroComponent } from "../components/HeroComponent";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Grid container spacing={2} sx={{ color: "#fefae0" }}>
        {/* DIVIDIR EN COMPONENTE Hero */}
        <HeroComponent />

        {/* DIVIDIR EN COMPONENTE Trending y minicomponentes TopAiring, MostPopular, MostFavorite, LastCompleted */}
        <Grid item xs={12} m={6}>
          <Stack spacing={6}>
            <Typography
              variant="h5"
              style={{ fontWeight: 600, color: "#dda15e" }}
            >
              Top Characters
            </Typography>
            <TopCharacters />
          </Stack>
        </Grid>

        {/* TOP ANIMES */}

        <Grid item xs={12} my={4}>
          <TopAnimes />
        </Grid>
      </Grid>
    </div>
  );
};
