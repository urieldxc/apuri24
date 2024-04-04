import { Box, Stack, Typography } from "@mui/material";

export const CharacterCard = ({ char, index }) => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" >
      <Stack direction="column-reverse" gap={2} alignItems="center" sx={{ marginBottom: 0, width:"50px" }}>
        <Typography style={{fontWeight: 600}} marginTop={8}>{`0${index + 1}`}</Typography>
        <Typography 
          style={{
            fontWeight: 600,
            transform: "rotate(-90deg)",
            width: "10rem", /* Ancho máximo del nombre */
            whiteSpace: "nowrap", /* Evita el salto de línea */
            overflow: "hidden", /* Oculta el texto que excede el ancho */
            textOverflow: "ellipsis" /* Agrega los puntos suspensivos para indicar el texto truncado */
          }}
        >
          {char.name}
        </Typography>
      </Stack>
      <img width={"40%"} src={char.images.webp.image_url} />
    </Stack>
  );
};
