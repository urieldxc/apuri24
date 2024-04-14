import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const HorizontalAnimeCard = ({ anime }) => {
  return (
    <Box
      component={"li"}
      style={{ textDecoration: "none", margin: "20px 0px 20px 0px" }}
      key={crypto.randomUUID()}
      
    >
      <Stack direction={"row"} alignContent={"center"}>
        <Link to={`/anime/${anime.mal_id}`}>
          <img
            src={anime.images.webp.image_url}
            height={"90px"}
            width={"65px"}
            style={{ objectFit: "cover" }}
            alt={anime.title}
          ></img>
        </Link>
        <Stack
          direction={"column"}
          gap={2}
          sx={{
            marginLeft: "15px",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/anime/${anime.mal_id}`}
          >
            <Typography variant="subtitle2">{anime.title}</Typography>
          </Link>
          <Stack direction={"row"} gap={1}>
            <Stack direction={"row"}>
              <Box
                py={0.5}
                px={1}
                sx={{
                  bgcolor: "custom.buttonScore",
                  borderRadius: "10px 0px 0px 10px",
                  alignContent: "center",
                  
                }}
              >
                <Typography fontSize={"0.9rem"} sx={{ color: "text" }}>
                  {anime.score || "Unrated"}
                </Typography>
              </Box>
              <Box
                py={0.5}
                px={1}
                sx={{
                  bgcolor: "custom.buttonYear",
                  borderRadius: "0px 10px 10px 0px",
                  alignContent: "center",
                }}
              >
                <Typography fontSize={"0.9rem"} sx={{ color: "text" }}>
                  {anime.year || "Unknown"}
                </Typography>
              </Box>
            </Stack>
            <Button variant="outlined" size="small" sx={{justifySelf: 'flex-end'}}>Details</Button>
          </Stack>
        </Stack>
      </Stack>

      <Divider sx={{ marginTop: "20px" }} />
    </Box>
  );
};
