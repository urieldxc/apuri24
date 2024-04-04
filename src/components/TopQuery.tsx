import axios from "axios";
import { Stack} from "@mui/material";
import { useEffect, useState } from "react";
import { HorizontalAnimeCard } from "./HorizontalAnimeCard";

export const TopQuery = ({ query }) => {
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    const fetchTopAnime = async () => {
      try {
        // Verificar si ya hay datos almacenados para el tipo de consulta
        if (localStorage.getItem(query)) {
          setTopAnime(JSON.parse(localStorage.getItem(query)));
        } else {
          // Si no hay datos almacenados, realizar la solicitud a la API
          const response = await axios.get(
            `https://api.jikan.moe/v4/top/anime?filter=${query}&limit=5`
          );
          const animeData = response.data.data;
          setTopAnime(animeData);
          // Guardar los datos en el almacenamiento local para futuras consultas
          localStorage.setItem(query, JSON.stringify(animeData));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTopAnime();
  }, [query]);

  return (
    <Stack>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {topAnime.map((anime) => (
          <HorizontalAnimeCard key={crypto.randomUUID()} anime={anime} />
        ))}
      </ul>
    </Stack>
  );
};
