import { Box, Button } from "@mui/material";


const isLogged = true;

export const RegisterNavWrapper = () => {
    return (
        <>
            {isLogged &&
                <Box>
                    <Button color="inherit">Login</Button>
                    <Button color='inherit'>Register</Button>
                </Box>

            }
        </>
    )
}
