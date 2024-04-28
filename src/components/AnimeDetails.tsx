import {
  Box,
  Grid,
  Icon,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { useParams } from "react-router";

export const AnimeDetails = () => {
  const [animeDetail, setAnimeDetail] = useState<any>({});
  const params = useParams<{ animeId: string }>();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Define si la pantalla es pequeña (menor que "sm")

  console.log(animeDetail);
  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem(`animeDetail-${params.animeId}`);
      if (cachedData) {
        setAnimeDetail(JSON.parse(cachedData));
      } else {
        try {
          const { data } = await axios.get(
            `https://api.jikan.moe/v4/anime/${params.animeId}`
          );
          setAnimeDetail(data.data);
          localStorage.setItem(
            `animeDetail-${params.animeId}`,
            JSON.stringify(data.data)
          );
        } catch (error) {
          console.error("Error fetching anime details:", error);
        }
      }
    };
    fetchData();
  }, [params.animeId]);

  return (
    <Grid container spacing={2} px={2} py={4} gap={6}>
      <Grid item xs={12} md={5}>
        {/* Imagen y paper */}
        <Grid container direction="row" spacing={2}>
          {animeDetail.images?.webp?.large_image_url && (
            <Grid item xs={12}>
              <div
                style={{
                  backgroundImage: `url(${animeDetail.images.webp.large_image_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "80%",
                    background: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(37, 36, 34, 1))`,
                  }}
                />
              </div>
            </Grid>
          )}
          <Box sx={{ p: 2, ml: 2, mt: 4, border: "1px solid", borderColor: "primary.main", width: "100%"  }}>
            <Typography variant="h6" mb={2}> English Title: {animeDetail.title_english}</Typography>
            <Stack direction={"row"} gap={2} sx={{ justifyContent: "space-between" }}>
              <Stack>
                <Typography>Episodes: {animeDetail.episodes}</Typography>
                <Typography>Rating: {animeDetail.score}</Typography>
                <Typography>Favorites: {animeDetail.favorites} </Typography>
                <Typography>Rank: {animeDetail.rank}</Typography>
                <Typography>Popularity: {animeDetail.popularity}</Typography>
                
              </Stack>
              <Stack>
                <Typography>
                  Status: {animeDetail.status || "Unknown"}
                </Typography>
                <Typography>Source: {animeDetail.source}</Typography>
                <Typography>Season: {animeDetail.season} </Typography>
                <Typography>Broadcast: {animeDetail.broadcast?.day}</Typography>
                <Typography>
                  Broadcast Time: {animeDetail.broadcast?.time}
                </Typography>
                
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      {/* Detalles y trailer */}
      <Grid item xs={12} md={6}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            mb={2}
            style={{
              fontWeight: 600,
              fontSize: isSmallScreen ? "1.75rem" : "3rem",
            }}
          >
            {animeDetail.title}
          </Typography>
          <Stack direction="row" gap={2} mb={2}>
            {animeDetail.media && (
              <Typography>
                <Icon sx={{ color: "rgb(221, 161, 94)" }}>
                  <LiveTvOutlinedIcon />
                </Icon>{" "}
                {animeDetail.media}
              </Typography>
            )}
            <Typography>
              <Icon sx={{ color: "rgb(221, 161, 94)" }}>
                <AccessTimeOutlinedIcon />
              </Icon>
              {animeDetail.duration}
            </Typography>
            <Typography>
              <Icon sx={{ color: "rgb(221, 161, 94)" }}>
                <CalendarMonthOutlinedIcon />
              </Icon>
              {animeDetail.year}
            </Typography>
            <Typography>
              <Icon sx={{ color: "rgb(221, 161, 94)" }}>
                <PlayCircleOutlineOutlinedIcon />
              </Icon>
              {animeDetail.airing ? "Airing" : "Not Airing"}
            </Typography>
          </Stack>
          <Typography variant="body1">{animeDetail.synopsis}</Typography>
        </Grid>
        {animeDetail.trailer && (
          <Grid>
            <Typography variant="h5" my={2} style={{ fontWeight: 600 }}>
              Trailer
            </Typography>
            <embed
              src={animeDetail.trailer?.embed_url}
              width="100%"
              height="400"
            />
          </Grid>
        )}

      </Grid>
    </Grid>
  );
};
