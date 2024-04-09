import { Stack, Typography } from "@mui/material";

export const CharacterCard = ({ char, index }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"end"}
      style={{ height: "200px", width: "200px", position: "relative" }}
    >
      {/* Stack para el número y el nombre */}
      <Stack
        direction={"row"}
        gap={2}
        sx={{
          height: "auto",
          width: "auto",
          transform: "rotate(-90deg)",
          position: "absolute",
          left: "-75px",
          bottom:"25px",
          alignItems: "center"
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: "1.5rem", transform: "rotate(90deg)", color: "#dda15e" }}>
          {`0${index + 1}`}
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            width: "8rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {char.name}
        </Typography>
      </Stack>
      
      {/* Imagen */}
      <img width={"80%"} style={{height: "120%"}} src={char.images.webp.image_url} />
    </Stack>
  );
};