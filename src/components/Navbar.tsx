import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Searchbar } from './Searchbar'
import { Stack, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Navbar = () => {

    const [searchInput, setSearchInput] = useState<any>(['Naruto'])

    const [animeNavList, setAnimeNavList] = useState([])
    
    const mapAnimeData = (anime) => {
        return {
            title: anime.title,
            year: anime.year,
            image: anime.images.webp.image_url
        }
    }

    const searchAnimeNav = () => {
        axios.get(`https://api.jikan.moe/v4/anime?q=${searchInput}`)
            .then(response => {
                const array = response.data.data.map(mapAnimeData)
                setAnimeNavList(array)
                // const {title} = response.data.data[2]

            })
    }

    useEffect(() => {
        searchAnimeNav();

    }, [searchInput])


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ padding: "10px 0 10px 0"}}>
                <Toolbar>
                    <Typography alignSelf={'center'} variant="h6" component="div" sx={{ flexGrow: 1 / 2 }}>
                        APURI
                    </Typography>

                    <Stack sx={{ flexGrow: 1 }}>
                        <Searchbar animeList={animeNavList} setSearchInput={setSearchInput} />
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
