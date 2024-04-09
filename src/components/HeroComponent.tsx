import { Box, Grid, Icon, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchAnime();
    }, 1200); // 1500 milisegundos = 1.5 segundos
  
    return () => clearTimeout(timer); // Limpiar el temporizador en la limpieza de efectos
  }, []);
   // Hacer la llamada una vez al montar el componente, no en cada cambio de topAiring

 return (
    <Grid item xs={12}>
      <Box sx={{ paddingX: 10, paddingY: 20 }}>
        <Slider {...sliderSettings}>
          {topAiring.map((anime, i) => (
            <Box key={crypto.randomUUID()}>
              <Stack direction="row" sx={{ position: "relative", overflow: "hidden", minHeight: "500px",paddingX: 10 }}>
                <Box sx={{ width: "50%" }}>
                  <Typography>#{i + 1} Spotlight</Typography>
                  <Typography variant="h3">{anime.title}</Typography>
                  <Stack direction="row" gap={2} mb={2}>
                    <Typography><Icon><LiveTvOutlinedIcon/></Icon> {anime.type}</Typography>
                    <Typography><Icon><AccessTimeOutlinedIcon/></Icon>{anime.duration}</Typography>
                    <Typography><Icon><CalendarMonthOutlinedIcon/></Icon>{anime.year}</Typography>
                    <Typography><Icon><PlayCircleOutlineOutlinedIcon/></Icon>{anime.status}</Typography>
                  </Stack>
                  <Typography>{anime.synopsis}</Typography>
                </Box>

                <Stack
                  sx={{ width: "70%", position: "absolute", right: "0px", top: "0px", zIndex: -1, alignItems: "end" }}
                >
                  <img style={{ width: "50%", maskImage: "linear-gradient(270deg, transparent 0, rgb(36, 36, 40) 30%, rgb(36, 36, 40) 70%, transparent)"}} src={anime.images.webp.large_image_url} />
                </Stack>
                
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </Grid>
  );
};
