import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css"; 
import { Box, CssBaseline } from "@mui/material";
import {  RouterProvider,
} from "react-router-dom";
import { Navbar } from "./components/Navbar"; 
import { router } from "./Router";



function App() {
  return (
    
      <Box sx={{ backgroundColor: "#252422" }}>
        <CssBaseline />
        <Navbar />
        <RouterProvider router={router} />
      </Box>
  );
}

export default App;
