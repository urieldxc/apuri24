import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export const TopAiring = () => {
  const [topAiring, setTopAiring] = useState([]);

  const searchAnimeNav = () => {
    axios
      .get(`https://api.jikan.moe/v4/top/anime?filter=airing`)
      .then((response: any) => {
        const animeData = response.data.data;
        const slicedArray = animeData.slice(0, 5);
        setTopAiring(slicedArray);
      });
  };

  useEffect(() => {
    searchAnimeNav();
  }, []);

  return (
    // DIVIDIR EN COMPONENTE HorizontalAnimeCard
    <ul>
      {topAiring.map((anime) => (
        <Box component={"li"}>
          <Stack direction={'row'}>
            <img src={anime.images.webp.image_url} height={'100px'} width={'75px'}></img>
            <Stack direction={'column'}>
              <Typography>{anime.title}</Typography>
              <Stack direction={'row'}>
                <Box py={.5} px={1} sx={{bgcolor: "yellow", borderRadius: "10px 0px 0px 10px"}}><Typography>{anime.score}</Typography></Box>
                <Box py={.5} px={1} sx={{bgcolor: "lightgreen", borderRadius: "0px 10px 10px 0px"}}><Typography>{anime.year || "Unknown"}</Typography></Box>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      ))}
    </ul>
  );
};

// A SU VEZ ESTE COMPONENTE SE PUEDE REUTILIZAR CON EL DE MOSTPOPULAR, MOSTFAVORITE
// SI SOLO CAMBIAMOS EL QUERY
