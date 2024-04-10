import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


export const AnimeDetails = (  ) => {
  const [animeDetail, setAnimeDetail] = useState([])
  const params = useParams();
  console.log(params)
  useEffect( () => {
    axios.get(`https://api.jikan.moe/v4/anime/${params.animeId}`).then ( (response) => {
      setAnimeDetail(response.data.data) 
    },) 
  }, [])

  return (
    <div>
      <div>Anime Detail</div>
      <div>{animeDetail.title}</div>
      <div>{animeDetail.year}</div>
    </div>
  )
}
