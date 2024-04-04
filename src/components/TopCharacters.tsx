import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";

export const TopCharacters = () => {
  const [topCharacters, setTopCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/top/characters?limit=6")
      .then((response) => setTopCharacters(response.data.data));
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
