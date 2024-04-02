import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

type animeList = {
    [key:string]: any
}

type SearchBarInput = {
    
}

// PENDIENTE DE REFACTORIZAR EL FUNCIONAMIENTO

export const Searchbar = ({ animeList, setSearchInput: string }): JSX.Element => {

    const [searchTerms, setSearchTerms] = useState()

    const handleChange = (e) => {
        setSearchTerms(e.target.value)
        setSearchInput(searchTerms)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(searchTerms)
        setSearchInput(searchTerms)
        // console.log(e.target[0].defaultValue)
    }
    // }


    return (
        <>
            <Box>
                <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: "center" }}>
                    <Autocomplete
                        disablePortal
                        options={animeList}
                        id="autocomplete-list"
                        renderInput={(params) => <TextField {...params} label="Search an anime..." onChange={e => handleChange(e)}/>}
                        getOptionLabel={(option) => option.title || ""}
                        renderOption={(props, option) => (
                            <Box component='li' {...props} gap={2}>
                                <img src={option.image} width={"50px"} />
                                <Typography>
                              {option.title} 
                                </Typography> 
                            </Box>
                          )}
                          
                        fullWidth
                        freeSolo
                    >

                    </Autocomplete>

                    <SearchIcon />
                </form>
            </Box>
        </>
    )
}
