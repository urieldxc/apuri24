import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

export const HorizontalAnimeCard = ({anime}) => {
  return (
    <Box
            component={"li"}
            style={{ textDecoration: "none", margin: "20px -30px 20px -30px" }}
            key={crypto.randomUUID()}
          >
            <Stack direction={"row"} alignContent={"center"}>
              <img
                src={anime.images.webp.image_url}
                height={"90px"}
                width={"65px"}
                style={{ objectFit: "cover" }}
                alt={anime.title}
              ></img>
              <Stack
                direction={"column"}
                gap={2}
                sx={{
                  marginLeft: "15px",
                  display: "flex",
                  justifyContent: "center",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <Typography variant="subtitle2">{anime.title}</Typography>
                <Stack direction={"row"}>
                  <Box
                    py={0.5}
                    px={1}
                    sx={{
                      bgcolor: "yellow",
                      borderRadius: "10px 0px 0px 10px",
                    }}
                  >
                    <Typography sx={{ color: "black"}}>{anime.score}</Typography>
                  </Box>
                  <Box
                    py={0.5}
                    px={1}
                    sx={{
                      bgcolor: "lightgreen",
                      borderRadius: "0px 10px 10px 0px",
                    }}
                  >
                    <Typography sx={{ color: "black"}}>{anime.year || "Unknown"}</Typography>
                  </Box>
                </Stack>
              </Stack>
            </Stack>

            <Divider sx={{ marginTop: "20px" }} color="#fefae0" />
          </Box>
  )
}
