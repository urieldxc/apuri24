import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";

export const TopCharacters = () => {
  const [topCharacters, setTopCharacters] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://api.jikan.moe/v4/top/characters?limit=6");
          setTopCharacters(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData(); // Llama a la función asíncrona interna
    }, 500); // Espera 1.5 segundos antes de llamar a fetchData
  
    return () => clearTimeout(timer); // Limpiar el temporizador en la limpieza de efectos
  }, []);
  
  

  return (
    <Grid container>
      {topCharacters.map((char, i) => (
        <Grid item xs={12} sm={6} md={2} key={crypto.randomUUID()}>
          <CharacterCard char={char} index={i}/>
        </Grid>
      ))}
    </Grid>
  );
};
