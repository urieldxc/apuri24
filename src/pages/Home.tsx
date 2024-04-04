import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { TopAnimes } from "../components/TopAnimes";
import { TopCharacters } from "../components/TopCharacters";

export const Home = () => {
  
  return (
    <div>
      <Navbar />
      <Grid container spacing={2}>
        {/* DIVIDIR EN COMPONENTE Hero */}
        <Grid item xs={12}>
          <Box sx={{ padding: 20 }}>
            <Typography variant="h3">Anime Title</Typography>
          </Box>
        </Grid>

        {/* DIVIDIR EN COMPONENTE Trending y minicomponentes TopAiring, MostPopular, MostFavorite, LastCompleted */}
        <Grid item xs={12} m={6}>
          <Stack spacing={6}>
            <Typography variant="h5" style={{fontWeight: 600}}>Top Characters</Typography>
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
            <Typography variant="h5">Lastest Episode</Typography>
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
            <Typography variant="h5">Top Upcoming</Typography>
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
