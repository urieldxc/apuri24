import { Box, Grid, Icon, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { animeList } from "../utils/animes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HeroComponent = () => {
  const [topAiring, setTopAiring] = useState([]);

  const searchAnime = async () => {
    try {
      const res = await axios.get("https://api.jikan.moe/v4/top/anime?filter=airing&limit=5");
      setTopAiring(res.data.data);
      console.log(topAiring);
      console.log(topAiring)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  var sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    
  };

  // Hacer la llamada una vez al montar el componente, no en cada cambio de topAiring

  return (
    <Grid item xs={12}>
      <Box sx={{ paddingX: 10, paddingBottom: 0 }}>
        <Slider  {...sliderSettings}>
          {animeList.map((anime, i) => (
            <Box key={crypto.randomUUID()}>
              <Stack direction="row" sx={{ position: "relative", overflow: "hidden", minHeight: "500px", paddingX: 10 }}>
                <Box sx={{ width: "50%", height: "600px", paddingTop: "10%" }}>
                  <Typography>#{i + 1} Spotlight</Typography>
                  <Typography variant="h3">{anime.title}</Typography>
                  <Stack direction="row" gap={2} mb={2}>
                    <Typography><Icon><LiveTvOutlinedIcon/></Icon> {anime.media}</Typography>
                    <Typography><Icon><AccessTimeOutlinedIcon/></Icon>{anime.duration}</Typography>
                    <Typography><Icon><CalendarMonthOutlinedIcon/></Icon>{anime.year}</Typography>
                    <Typography><Icon><PlayCircleOutlineOutlinedIcon /></Icon>{anime.airing ? "Airing" : "Not Airing"}</Typography>
                  </Stack>
                  <Typography>{anime.synopsis}</Typography>
                </Box>

                <Stack
                sx={{
                  width: "70%",
                  position: "absolute",
                  right: "0px",
                  top: "0px",
                  zIndex: -1,
                  alignItems: "end",
                  overflow: "hidden", // Asegura que el degradado no se desborde
                }}
              >
  {/* Elemento para el degradado */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, rgba(36, 36, 40, 1) 0%, transparent 50%, transparent 50%, rgba(36, 36, 40, 1) 100%)",
      zIndex: 1, // Asegura que esté sobre la imagen
    }}
  ></div>

  {/* Imagen */}
  <img
    style={{
      width: "120%",
      height: "200%",
      objectFit: "cover", // Ajusta la imagen para cubrir completamente el contenedor
      position: "relative", // Establece la posición como relativa para que el z-index funcione
      zIndex: 0, // Asegura que esté detrás del degradado
    }}
    src={anime.img}
  />
                </Stack>

                
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </Grid>
  );
};
