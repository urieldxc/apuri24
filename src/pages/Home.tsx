import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { TopAnimes } from "../components/TopAnimes";
import { TopCharacters } from "../components/TopCharacters";
import { HeroComponent } from "../components/HeroComponent";

export const Home = () => {
  
  return (
    <div>
      <Navbar />
      <Grid container spacing={2} sx={{ color: "#fefae0"}}>
        {/* DIVIDIR EN COMPONENTE Hero */}
        <HeroComponent />

        {/* DIVIDIR EN COMPONENTE Trending y minicomponentes TopAiring, MostPopular, MostFavorite, LastCompleted */}
        <Grid item xs={12} m={6}>
          <Stack spacing={6}>
            <Typography variant="h5" style={{fontWeight: 600, color: "#dda15e"}}>Top Characters</Typography>
            <TopCharacters />
          </Stack>
        </Grid>

        {/* TOP ANIMES */}

        <Grid item xs={12} my={4}>
          <TopAnimes />
        </Grid>

        {/* DIVIDIR EN COMPONENTE LastestEpisode */}
        <Grid item xs={12}>
          <Stack py={6}>
            <Typography variant="h5" sx={ {fontWeight: 600, color: "#dda15e"}}>Lastest Episode</Typography>
          </Stack>

          <Grid container spacing={4}>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* DIVIDIR EN COMPONENTE TopUpcoming */}
        <Grid item xs={12}>
          <Stack py={6}>
            <Typography variant="h5" sx={ {fontWeight: 600, color: "#dda15e"}}>Top Upcoming</Typography>
          </Stack>

          <Grid container  spacing={4}>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card>
                <Typography>Anime 1</Typography>
                <Typography>April 7</Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
